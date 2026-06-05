import { DynamoDB } from "@aws-sdk/client-dynamodb";
import type { HttpRequest } from "@smithy/core/protocols";
import { HttpResponse } from "@smithy/core/protocols";
import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

describe("systemClockOffset concurrent correction", () => {
  it("retries all concurrent requests after clock-skew correction", async () => {
    let requestCount = 0;

    const client = new DynamoDB({
      region: "us-west-2",
      credentials: { accessKeyId: "AKID", secretAccessKey: "SECRET" },
      systemClockOffset: -86400000,
      requestHandler: {
        async handle(request: HttpRequest) {
          // allow 3 skewed requests to accumulate before responding.
          await new Promise((r) => setTimeout(r, 250));
          requestCount++;
          const now = new Date().toUTCString();

          const authHeader = request.headers["authorization"] ?? "";
          const credentialMatch = authHeader.match(/Credential=\w+\/(\d{8})\//);
          const signingDate = credentialMatch?.[1];
          const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

          if (signingDate !== today) {
            return {
              response: new HttpResponse({
                statusCode: 400,
                headers: {
                  server: "Server",
                  date: now,
                  "content-type": "application/x-amz-json-1.0",
                  connection: "keep-alive",
                  "x-amzn-requestid": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                  "x-amz-crc32": "0",
                },
                body: Readable.from([
                  JSON.stringify({
                    __type: "com.amazon.coral.service#InvalidSignatureException",
                    message: `Signature expired: ${signingDate}T000000Z is now earlier than ${today}T000000Z (${today}T000000Z - 15 min.)`,
                  }),
                ]),
              }),
            };
          }

          return {
            response: new HttpResponse({
              statusCode: 200,
              headers: {
                server: "Server",
                date: now,
                "content-type": "application/x-amz-json-1.0",
                connection: "keep-alive",
                "x-amzn-requestid": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "x-amz-crc32": "357788998",
              },
              body: Readable.from([
                JSON.stringify({
                  TableNames: ["MyTable"],
                }),
              ]),
            }),
          };
        },
      },
    });

    async function concurrentRequests() {
      const results = await Promise.all([client.listTables(), client.listTables(), client.listTables()]);

      for (const result of results) {
        expect(result.TableNames).toEqual(["MyTable"]);
        expect(result.$metadata.httpStatusCode).toEqual(200);
      }
    }

    {
      await concurrentRequests();

      // 3 initial stale requests + 3 retries with corrected offset = 6.
      expect(requestCount).toBe(6);
      expect(Math.abs(client.config.systemClockOffset)).toBeLessThan(10_000);
    }
    {
      await concurrentRequests();

      // subsequent requests should already be skew-corrected and only add 3 more.
      expect(requestCount).toBe(9);
    }
  });
});
