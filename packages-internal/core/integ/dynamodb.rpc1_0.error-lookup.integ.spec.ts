import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { ConditionalCheckFailedException, ConditionalCheckFailedException$, DynamoDB } from "@aws-sdk/client-dynamodb";
import { HttpResponse } from "@smithy/core/protocols";
import { TypeRegistry } from "@smithy/core/schema";
import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

describe("error lookup using DynamoDB as an example", () => {
  it("should look up errors using the shape name rather than the apparent shape ID", async () => {
    // because the specification says to remove the namespace:
    // https://smithy.io/2.0/aws/protocols/aws-json-1_0-protocol.html#operation-error-serialization
    // and because the server may return an error with a namespace different from the modeled one.
    const ddb = new DynamoDB({
      region: "us-west-2",
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
    });

    requireRequestsFrom(ddb)
      .toMatch({
        hostname: "dynamodb.us-west-2.amazonaws.com",
      })
      .respondWith(
        new HttpResponse({
          statusCode: 400,
          headers: {},
          body: Readable.from(
            Buffer.from(
              JSON.stringify({
                __type: "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException",
                message: "integration test error",
              })
            )
          ),
        })
      );

    const error = await ddb
      .getItem({
        TableName: "table",
        Key: {
          id: {
            S: "1",
          },
        },
      })
      .catch((e) => e);

    const privateAccessTypeRegistry = (ddb.config.protocol as any).compositeErrorRegistry;
    expect(privateAccessTypeRegistry).toBeInstanceOf(TypeRegistry);

    const serverId = `com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException`;
    const modeledId = `com.amazonaws.dynamodb#ConditionalCheckFailedException`;
    const shapeName = `ConditionalCheckFailedException`;

    expect(() => {
      privateAccessTypeRegistry.getSchema(serverId);
    }).toThrow(`@smithy/core/schema - schema not found for ${serverId}`);
    expect(error).toBeInstanceOf(ConditionalCheckFailedException);

    expect(privateAccessTypeRegistry.getSchema(modeledId)).toBe(ConditionalCheckFailedException$);
    expect(privateAccessTypeRegistry.getSchema(shapeName)).toBe(ConditionalCheckFailedException$);
  });
});
