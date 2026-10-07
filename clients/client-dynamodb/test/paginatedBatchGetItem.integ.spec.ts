import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB, paginatedBatchGetItem } from "@aws-sdk/client-dynamodb";
import { HttpResponse } from "@smithy/core/protocols";
import { toUtf8 } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

describe("paginatedBatchGetItem", () => {
  it("retries with only the unprocessed keys", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const input = {
      RequestItems: {
        first: { Keys: [{ id: { S: "1" } }] },
        second: { Keys: [{ id: { S: "2" } }] },
      },
      ReturnConsumedCapacity: "TOTAL" as const,
    };
    const unprocessedKeys = { second: { Keys: [{ id: { S: "2" } }] } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            const request = JSON.parse(toUtf8(body));
            expect(request.RequestItems).toEqual(input.RequestItems);
            expect(request.ReturnConsumedCapacity).toBe("TOTAL");
          },
        },
        {
          body(body) {
            const request = JSON.parse(toUtf8(body));
            expect(request.RequestItems).toEqual(unprocessedKeys);
            expect(request.ReturnConsumedCapacity).toBe("TOTAL");
          },
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Responses: { first: [{ id: { S: "1" } }] },
              UnprocessedKeys: unprocessedKeys,
            })
          ),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { second: [{ id: { S: "2" } }] }, UnprocessedKeys: {} })),
        })
      );

    const pages = [];
    for await (const page of paginatedBatchGetItem({ client: ddb }, input)) {
      pages.push(page);
    }

    expect(pages.map((page) => page.Responses)).toEqual([
      { first: [{ id: { S: "1" } }] },
      { second: [{ id: { S: "2" } }] },
    ]);
    expect(input.RequestItems).toEqual({
      first: { Keys: [{ id: { S: "1" } }] },
      second: { Keys: [{ id: { S: "2" } }] },
    });
  });

  it("continues requesting unprocessed keys across multiple responses", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const keys = [{ id: { S: "1" } }, { id: { S: "2" } }, { id: { S: "3" } }];
    const firstRemainder = { table: { Keys: [keys[1], keys[2]] } };
    const secondRemainder = { table: { Keys: [keys[2]] } };
    const input = { RequestItems: { table: { Keys: keys } } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(input.RequestItems);
          },
        },
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(firstRemainder);
          },
        },
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(secondRemainder);
          },
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { table: [keys[0]] }, UnprocessedKeys: firstRemainder })),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { table: [keys[1]] }, UnprocessedKeys: secondRemainder })),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { table: [keys[2]] }, UnprocessedKeys: {} })),
        })
      );

    const pages = [];
    for await (const page of paginatedBatchGetItem({ client: ddb }, input)) {
      pages.push(page);
    }

    expect(pages).toHaveLength(3);
  });

  it("preserves response order and does not return requested items that are absent", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const keys = ["1", "2", "3", "4", "5"].map((id) => ({ id: { S: id } }));
    const unprocessedKeys = { table: { Keys: [keys[3], keys[2]] } };
    const input = { RequestItems: { table: { Keys: keys } } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(input.RequestItems);
          },
        },
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(unprocessedKeys);
          },
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Responses: { table: [keys[1], keys[0]] },
              UnprocessedKeys: unprocessedKeys,
            })
          ),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { table: [keys[2], keys[3]] }, UnprocessedKeys: {} })),
        })
      );

    const pages = [];
    for await (const page of paginatedBatchGetItem({ client: ddb }, input)) {
      pages.push(page);
    }

    expect(pages.map((page) => page.Responses?.table)).toEqual([
      [keys[1], keys[0]],
      [keys[2], keys[3]],
    ]);
  });

  it("does not send a request for empty input", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });

    expect((await paginatedBatchGetItem({ client: ddb }, { RequestItems: {} }).next()).done).toBe(true);
  });

  it("sends requests only as pages are requested and stops when UnprocessedKeys is absent", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const input = { RequestItems: { table: { Keys: [{ id: { S: "1" } }] } } };
    let requests = 0;

    requireRequestsFrom(ddb)
      .toMatch({
        body(body) {
          requests += 1;
          expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(input.RequestItems);
        },
      })
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { table: [{ id: { S: "1" } }] } })),
        })
      );

    const iterator = paginatedBatchGetItem({ client: ddb }, input);
    expect(requests).toBe(0);
    expect((await iterator.next()).value).toMatchObject({ Responses: { table: [{ id: { S: "1" } }] } });
    expect(requests).toBe(1);
    expect((await iterator.next()).done).toBe(true);
    expect(requests).toBe(1);
  });

  it("propagates a DynamoDB service error", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
      maxAttempts: 1,
    });

    requireRequestsFrom(ddb)
      .toMatch({ hostname: /dynamodb/ })
      .respondWith(
        new HttpResponse({
          statusCode: 400,
          headers: { "x-amzn-errortype": "ProvisionedThroughputExceededException" },
          body: Buffer.from(
            JSON.stringify({
              __type: "com.amazonaws.dynamodb#ProvisionedThroughputExceededException",
              message: "throughput exceeded",
            })
          ),
        })
      );

    await expect(
      paginatedBatchGetItem({ client: ddb }, { RequestItems: { table: { Keys: [{ id: { S: "1" } }] } } }).next()
    ).rejects.toMatchObject({ name: "ProvisionedThroughputExceededException" });
  });

  it("propagates a service error after yielding an earlier page", async () => {
    const ddb = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
      maxAttempts: 1,
    });
    const input = { RequestItems: { table: { Keys: [{ id: { S: "1" } }, { id: { S: "2" } }] } } };
    const unprocessedKeys = { table: { Keys: [{ id: { S: "2" } }] } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(input.RequestItems);
          },
        },
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual(unprocessedKeys);
          },
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({ Responses: { table: [{ id: { S: "1" } }] }, UnprocessedKeys: unprocessedKeys })
          ),
        }),
        new HttpResponse({
          statusCode: 400,
          headers: { "x-amzn-errortype": "ProvisionedThroughputExceededException" },
          body: Buffer.from(
            JSON.stringify({
              __type: "com.amazonaws.dynamodb#ProvisionedThroughputExceededException",
              message: "throughput exceeded",
            })
          ),
        })
      );

    const iterator = paginatedBatchGetItem({ client: ddb }, input);
    expect((await iterator.next()).value).toMatchObject({ Responses: { table: [{ id: { S: "1" } }] } });
    await expect(iterator.next()).rejects.toMatchObject({ name: "ProvisionedThroughputExceededException" });
  });
});
