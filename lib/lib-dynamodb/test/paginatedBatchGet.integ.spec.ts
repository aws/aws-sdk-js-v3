import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, paginatedBatchGet } from "@aws-sdk/lib-dynamodb";
import { HttpResponse } from "@smithy/core/protocols";
import { toUtf8 } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

describe("paginatedBatchGet", () => {
  it("retries with only unprocessed keys and stops when UnprocessedKeys is empty", async () => {
    const baseClient = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const ddb = DynamoDBDocumentClient.from(baseClient);
    const input = { RequestItems: { table: { Keys: [{ id: "1" }, { id: "2" }] } } };
    const unprocessedKeys = { table: { Keys: [{ id: { S: "2" } }] } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual({
              table: { Keys: [{ id: { S: "1" } }, { id: { S: "2" } }] },
            });
          },
        },
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual({
              table: { Keys: [{ id: { S: "2" } }] },
            });
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
          statusCode: 200,
          headers: {},
          body: Buffer.from(JSON.stringify({ Responses: { table: [{ id: { S: "2" } }] }, UnprocessedKeys: {} })),
        })
      );

    const pages = [];
    for await (const page of paginatedBatchGet({ client: ddb }, input)) {
      pages.push(page);
    }

    expect(pages.map((page) => page.Responses)).toEqual([{ table: [{ id: "1" }] }, { table: [{ id: "2" }] }]);
    expect(input.RequestItems).toEqual({ table: { Keys: [{ id: "1" }, { id: "2" }] } });
  });

  it("handles multiple tables and stops when UnprocessedKeys is empty", async () => {
    const baseClient = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const ddb = DynamoDBDocumentClient.from(baseClient);
    const input = {
      RequestItems: {
        first: { Keys: [{ id: "1" }] },
        second: { Keys: [{ id: "2" }] },
      },
      ReturnConsumedCapacity: "TOTAL" as const,
    };
    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            const request = JSON.parse(toUtf8(body));
            expect(request.RequestItems).toEqual({
              first: { Keys: [{ id: { S: "1" } }] },
              second: { Keys: [{ id: { S: "2" } }] },
            });
            expect(request.ReturnConsumedCapacity).toBe("TOTAL");
          },
        },
        {
          body(body) {
            const request = JSON.parse(toUtf8(body));
            expect(request.RequestItems).toEqual({
              second: { Keys: [{ id: { S: "2" } }] },
            });
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
              UnprocessedKeys: { second: { Keys: [{ id: { S: "2" } }] } },
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
    for await (const page of paginatedBatchGet({ client: ddb }, input)) {
      pages.push(page);
    }

    expect(pages.map((page) => page.Responses)).toEqual([
      { first: [{ id: "1" }] },
      { second: [{ id: "2" }] },
    ]);
    expect(input.RequestItems).toEqual({
      first: { Keys: [{ id: "1" }] },
      second: { Keys: [{ id: "2" }] },
    });
  });

  it("preserves response order and does not return requested items that are absent", async () => {
    const baseClient = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const ddb = DynamoDBDocumentClient.from(baseClient);
    const keys = ["1", "2", "3", "4", "5"].map((id) => ({ id }));
    const unprocessedKeys = { table: { Keys: [{ id: { S: "4" } }, { id: { S: "3" } }] } };
    const input = { RequestItems: { table: { Keys: keys } } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual({
              table: { Keys: keys.map(({ id }) => ({ id: { S: id } })) },
            });
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
              Responses: {
                table: [
                  { id: { S: "2" } },
                  { id: { S: "1" } },
                ],
              },
              UnprocessedKeys: unprocessedKeys,
            })
          ),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Responses: { table: [{ id: { S: "3" } }, { id: { S: "4" } }] },
              UnprocessedKeys: {},
            })
          ),
        })
      );

    const pages = [];
    for await (const page of paginatedBatchGet({ client: ddb }, input)) {
      pages.push(page);
    }

    expect(pages.map((page) => page.Responses?.table)).toEqual([
      [{ id: "2" }, { id: "1" }],
      [{ id: "3" }, { id: "4" }],
    ]);
  });

  it("does not send a request for empty input", async () => {
    const baseClient = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
    });
    const ddb = DynamoDBDocumentClient.from(baseClient);

    expect((await paginatedBatchGet({ client: ddb }, { RequestItems: {} }).next()).done).toBe(true);
  });

  it("stops when UnprocessedKeys is absent", async () => {
    let calls = 0;
    const client = {
      async send() {
        calls += 1;
        return { Responses: { table: [{ id: "1" }] } };
      },
    } as unknown as DynamoDBDocumentClient;

    const pages = [];
    for await (const page of paginatedBatchGet({ client }, { RequestItems: { table: { Keys: [{ id: "1" }] } } })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(1);
    expect(calls).toBe(1);
  });

  it("propagates a service error after yielding a page", async () => {
    const baseClient = new DynamoDB({
      credentials: { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" },
      region: "us-west-2",
      maxAttempts: 1,
    });
    const ddb = DynamoDBDocumentClient.from(baseClient);
    const input = { RequestItems: { table: { Keys: [{ id: "1" }, { id: "2" }] } } };

    requireRequestsFrom(ddb)
      .toMatch(
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual({
              table: { Keys: [{ id: { S: "1" } }, { id: { S: "2" } }] },
            });
          },
        },
        {
          body(body) {
            expect(JSON.parse(toUtf8(body)).RequestItems).toEqual({
              table: { Keys: [{ id: { S: "2" } }] },
            });
          },
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Responses: { table: [{ id: { S: "1" } }] },
              UnprocessedKeys: { table: { Keys: [{ id: { S: "2" } }] } },
            })
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

    const iterator = paginatedBatchGet({ client: ddb }, input);
    expect((await iterator.next()).value).toMatchObject({ Responses: { table: [{ id: "1" }] } });
    await expect(iterator.next()).rejects.toMatchObject({ name: "ProvisionedThroughputExceededException" });
  });
});
