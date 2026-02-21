import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { describe, expect, test as it } from "vitest";

import { DynamoDBDocument } from "./DynamoDBDocument";
import { DynamoDBDocumentClient } from "./DynamoDBDocumentClient";

describe(DynamoDBDocumentClient.name, () => {
  it("should allow initialization with cacheMiddleware: true", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
      cacheMiddleware: true,
    });
    expect(() => {
      DynamoDBDocumentClient.from(dynamodb);
    }).not.toThrow();
  });

  it("should clone the middleware stack from the parent client", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
    });
    const docClient = DynamoDBDocumentClient.from(dynamodb);
    expect(docClient.middlewareStack).not.toBe(dynamodb.middlewareStack);
    expect(docClient.middlewareStack.identify()).toEqual(dynamodb.middlewareStack.identify());
  });

  it("should not affect parent client when middleware is added to document client", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
    });
    const parentEntryCount = dynamodb.middlewareStack.identify().length;
    const docClient = DynamoDBDocumentClient.from(dynamodb);

    docClient.middlewareStack.add((next) => (args) => next(args), {
      name: "testMiddleware",
      step: "initialize",
    });

    expect(dynamodb.middlewareStack.identify().length).toBe(parentEntryCount);
    expect(docClient.middlewareStack.identify().length).toBe(parentEntryCount + 1);
  });

  it("should not affect document client when middleware is added to parent after creation", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
    });
    const docClient = DynamoDBDocumentClient.from(dynamodb);
    const docEntryCount = docClient.middlewareStack.identify().length;

    dynamodb.middlewareStack.add((next) => (args) => next(args), {
      name: "lateParentMiddleware",
      step: "initialize",
    });

    expect(docClient.middlewareStack.identify().length).toBe(docEntryCount);
  });
});

describe(DynamoDBDocument.name, () => {
  it("should allow initialization with cacheMiddleware: true", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
      cacheMiddleware: true,
    });
    expect(() => {
      DynamoDBDocument.from(dynamodb);
    }).not.toThrow();
  });
});
