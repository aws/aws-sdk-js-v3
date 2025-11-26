import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB, paginateScan, ScanCommandInput } from "@aws-sdk/client-dynamodb";
import { BatchGetCommandInput, paginateBatchGet } from "@aws-sdk/lib-dynamodb";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

describe("pagination", () => {
  it("makes sequential requests using a pagination token", async () => {
    const ddb = new DynamoDB({
      credentials: {
        accessKeyId: "INTEG_TEST",
        secretAccessKey: "INTEG_TEST",
      },
      region: "us-west-2",
    });

    requireRequestsFrom(ddb)
      .toMatch(
        {
          hostname: /dynamodb/,
          body(b) {
            expect(b).toContain("TableName");
            expect(b).not.toContain("ExclusiveStartKey");
          },
        },
        {
          hostname: /dynamodb/,
          body: /ExclusiveStartKey/,
        }
      )
      .respondWith(
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Items: [
                {
                  id: { S: "1" },
                  name: { S: "Item 1" },
                },
                {
                  id: { S: "2" },
                  name: { S: "Item 2" },
                },
              ],
              Count: 2,
              ScannedCount: 2,
              LastEvaluatedKey: {
                id: { S: "2" },
              },
            })
          ),
        }),
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Items: [
                {
                  id: { S: "3" },
                  name: { S: "Item 3" },
                },
                {
                  id: { S: "4" },
                  name: { S: "Item 4" },
                },
              ],
              Count: 2,
              ScannedCount: 2,
            })
          ),
        })
      );

    const requestParams: ScanCommandInput = {
      TableName: "test",
    };

    let pages = 0;
    for await (const page of paginateScan({ client: ddb }, requestParams)) {
      void page;
      pages += 1;
    }

    expect(pages).toEqual(2);
    /**
     * As of writing, paginators mutate the input object.
     * In case anyone is relying on this behavior to observe the pagination token,
     * we are enforcing it with this assertion.
     */
    expect(requestParams.ExclusiveStartKey).toEqual({
      id: { S: "2" },
    });
    expect.assertions(7);
  });

  it("processes batch items until all items are processed or an error is received", async () => {
    const ddb = new DynamoDB({
      credentials: {
        accessKeyId: "INTEG_TEST",
        secretAccessKey: "INTEG_TEST",
      },
      region: "us-west-2",
    });

    requireRequestsFrom(ddb)
      .toMatch(
        // first page request
        {
          hostname: /dynamodb/,
          body(b) {
            expect(b).toContain(
              '"RequestItems":{"test":{"Keys":[{"id":{"S":"1"}},{"id":{"S":"2"}},{"id":{"S":"3"}},{"id":{"S":"4"}},{"id":{"S":"5"}}]}}'
            );
          },
        },
        // second page request
        {
          hostname: /dynamodb/,
          body(b) {
            expect(b).toContain('"RequestItems":{"test":{"Keys":[{"id":{"S":"4"}},{"id":{"S":"3"}}]}}');
          },
        },
        // invalid request (duplicate key)
        {
          hostname: /dynamodb/,
          body(b) {
            expect(b).toContain('"RequestItems":{"test":{"Keys":[{"id":{"S":"1"}},{"id":{"S":"1"}}]}}');
          },
        }
      )
      .respondWith(
        // first page response
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Responses: {
                test: [
                  { id: { S: "2" }, name: { S: "Item 2" } },
                  { id: { S: "1" }, name: { S: "Item 1" } },
                ],
              },
              UnprocessedKeys: {
                test: {
                  Keys: [{ id: { S: "4" } }, { id: { S: "3" } }],
                },
              },
            })
          ),
        }),
        // second page response
        new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              Responses: {
                test: [
                  { id: { S: "3" }, name: { S: "Item 3" } },
                  { id: { S: "4" }, name: { S: "Item 4" } },
                ],
              },
              UnprocessedKeys: {},
            })
          ),
        }),
        // error response
        new HttpResponse({
          statusCode: 400,
          headers: {},
          body: Buffer.from(
            JSON.stringify({
              message: "Provided list of item keys contains duplicates",
            })
          ),
        })
      );

    const requestParams: BatchGetCommandInput = {
      RequestItems: {
        test: { Keys: [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }] },
      },
    };

    let pages = 0;
    for await (const page of paginateBatchGet({ client: ddb }, requestParams)) {
      pages += 1;
      if (pages === 1) {
        expect(page.Responses?.test).toEqual([
          { id: "2", name: "Item 2" },
          { id: "1", name: "Item 1" },
        ]);
      } else {
        expect(page.Responses?.test).toEqual([
          { id: "3", name: "Item 3" },
          { id: "4", name: "Item 4" },
        ]);
      }
    }

    expect(pages).toEqual(2);

    let thrownError;

    try {
      for await (const page of paginateBatchGet(
        { client: ddb },
        {
          RequestItems: {
            test: { Keys: [{ id: "1" }, { id: "1" }] },
          },
        }
      )) {
        void page;
        throw new Error("Received unexpected page");
      }
    } catch (error) {
      thrownError = error;
    }

    expect(thrownError).toBeInstanceOf(Error);
    expect((thrownError as Error).message).toBe("Provided list of item keys contains duplicates");

    expect.assertions(11);
  });
});
