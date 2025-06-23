
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DataMapper } from "./DataMapper";
import { DynamoDbSchema, DynamoDbTable } from "./schema";

const mockSend = vi.fn();
const mockClient = { send: mockSend } as any;

beforeEach(() => {
  mockSend.mockReset();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("DataMapper (integration-style)", () => {
  it("should put() and marshal input using schema metadata", async () => {
    class User {
      id!: string;
      name!: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    };

    Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(User.prototype, DynamoDbTable, { value: "Users" });

    const mapper = DataMapper.from(User, {
      client: mockClient,
    });

    const user = Object.assign(new User(), { id: "123", name: "Alice" });

    mockSend.mockResolvedValueOnce({});
    await mapper.put(user);

    const command = mockSend.mock.calls[0][0];
    expect(command).toBeInstanceOf(PutItemCommand);
    expect(command.input.TableName).toBe("Users");
    expect(command.input.Item).toEqual({
      id: { S: "123" },
      name: { S: "Alice" },
    });
  });

  it("should get() and hydrate result using schema metadata", async () => {
    class User {
      id!: string;
      name?: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    };

    Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(User.prototype, DynamoDbTable, { value: "Users" });

    const mapper = DataMapper.from(User, {
      client: mockClient,
    });

    mockSend.mockResolvedValueOnce({
      Item: {
        id: { S: "123" },
        name: { S: "Alice" },
      },
    });

    const result = await mapper.get({ id: "123" });

    expect(result).toBeInstanceOf(User);
    expect(result?.id).toBe("123");
    expect(result?.name).toBe("Alice");
  });

  it("should put() and return saved item when Attributes are returned", async () => {
    class User {
      id!: string;
      name!: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    };

    Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(User.prototype, DynamoDbTable, { value: "Users" });

    const mapper = DataMapper.from(User, {
      client: mockClient,
    });

    mockSend.mockResolvedValueOnce({
      Attributes: {
        id: { S: "123" },
        name: { S: "Alice" },
      },
    });

    const user = Object.assign(new User(), { id: "123", name: "Alice" });
    const result = await mapper.put(user);

    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe("123");
    expect(result.name).toBe("Alice");
  });
});
