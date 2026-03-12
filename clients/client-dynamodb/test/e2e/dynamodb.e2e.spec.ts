import { DynamoDB, ResourceNotFoundException } from "@aws-sdk/client-dynamodb";
import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

const testCredentials = (
  globalThis as typeof globalThis & {
    aws?: {
      testCredentials?: AwsCredentialIdentity | (() => Promise<AwsCredentialIdentity>);
    };
  }
).aws?.testCredentials;

describe(DynamoDB.name, () => {
  const ddb = new DynamoDB({
    region: "us-west-2",
    maxAttempts: 2,
    ...(testCredentials ? { credentials: testCredentials } : {}),
  });

  it("throws an error when table is not found", async () => {
    const error = await ddb
      .describeTable({
        TableName: "DynamoDB",
      })
      .catch((e) => e);

    expect(error).toMatchObject({
      $fault: "client",
      $metadata: {
        attempts: 1,
        httpStatusCode: 400,
      },
      name: "ResourceNotFoundException",
    });
    expect(error.message).toMatch(/non-existent table|not found/i);
    expect(error).toBeInstanceOf(ResourceNotFoundException);
    const registry = TypeRegistry.for("com.amazonaws.dynamodb");
    const errorSchema = registry.getSchema("ResourceNotFoundException") as StaticErrorSchema;
    expect(errorSchema).toBeDefined();
    if (!errorSchema) {
      throw new Error("Expected ResourceNotFoundException schema to be registered.");
    }
    const errorCtor = registry.getErrorCtor(errorSchema as StaticErrorSchema);
    expect(errorCtor).toBe(ResourceNotFoundException);
  });
});
