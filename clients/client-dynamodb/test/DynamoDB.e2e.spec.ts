import { DynamoDB, ResourceNotFoundException } from "@aws-sdk/client-dynamodb";
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

describe(DynamoDB.name, () => {
  const ddb = new DynamoDB({
    region: "us-west-2",
  });

  it("throws an error when table is not found", async () => {
    const error = await ddb
      .describeTable({
        TableName: "DynamoDB",
      })
      .catch((e) => e);

    expect(error).toMatchObject({
      message: "Requested resource not found: Table: DynamoDB not found",
      $fault: "client",
      $metadata: {
        attempts: 1,
        httpStatusCode: 400,
      },
      name: "ResourceNotFoundException",
    });

    expect(error).toBeInstanceOf(ResourceNotFoundException);

    const registry = TypeRegistry.for("com.amazonaws.dynamodb");
    const errorSchema = registry.getSchema("ResourceNotFoundException") as StaticErrorSchema;
    expect(errorSchema).toBeDefined();
    const errorCtor = registry.getErrorCtor(errorSchema);

    expect(errorCtor).toBe(ResourceNotFoundException);
  });
});
