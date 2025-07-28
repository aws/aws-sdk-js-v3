import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB, paginateScan, ScanCommandInput } from "@aws-sdk/client-dynamodb";
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
    expect(requestParams.ExclusiveStartKey).toEqual({
      id: { S: "2" },
    });
    expect.assertions(7);
  });
});
