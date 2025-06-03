import { GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { DataMapper } from "./DataMapper";
import { DynamoDbSchema, DynamoDbTable } from "./schema";

const mockSend = vi.fn();

const mockClient = {
  send: mockSend,
} as any;

beforeEach(() => {
  mockSend.mockReset();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("DataMapper", () => {
  it("should send PutItemCommand with marshalled input", async () => {
    const mapper = DataMapper.from(mockClient);
    const user = { id: "123", name: "Alice" };

    const schema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    };

    Object.defineProperty(user, DynamoDbTable, { value: "Users" });
    Object.defineProperty(user, DynamoDbSchema, { value: schema });

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

  it("should send GetItemCommand and unmarshall result", async () => {
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

    const mapper = DataMapper.from(mockClient);

    const fakeResponse = {
      Item: {
        id: { S: "123" },
        name: { S: "Alice" },
      },
    };

    mockSend.mockResolvedValueOnce(fakeResponse);

    const result = (await mapper.get({ id: "123" }, (data) => Object.assign(new User(), data), User)) as User;

    const command = mockSend.mock.calls[0][0];
    expect(command).toBeInstanceOf(GetItemCommand);
    expect(command.input.TableName).toBe("Users");
    expect(command.input.Key).toEqual({ id: { S: "123" } });

    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe("123");
    expect(result.name).toBe("Alice");
  });

  it("should allow put() with a factory-based object using schema metadata", async () => {
    class Product {
      id!: string;
      title!: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      title: { type: "String" },
    };

    Object.defineProperty(Product.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(Product.prototype, DynamoDbTable, { value: "Products" });

    const product = new Product();
    product.id = "p001";
    product.title = "Laptop";

    const mapper = DataMapper.from(mockClient);

    mockSend.mockResolvedValueOnce({});

    await mapper.put(product);

    const command = mockSend.mock.calls[0][0];
    expect(command).toBeInstanceOf(PutItemCommand);
    expect(command.input.TableName).toBe("Products");
    expect(command.input.Item).toEqual({
      id: { S: "p001" },
      title: { S: "Laptop" },
    });
  });

  it("should construct model instance using a factory function with parameters", async () => {
    // Model class
    class Product {
      constructor(public id: string, public title: string) {}
    }

    // Raw data class with schema metadata
    class ProductData {
      id!: string;
      title!: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      title: { type: "String" },
    };

    // Assign metadata to prototype of ProductData (not Product)
    Object.defineProperty(ProductData.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(ProductData.prototype, DynamoDbTable, { value: "Products" });

    const mapper = DataMapper.from(mockClient);

    const fakeResponse = {
      Item: {
        id: { S: "p001" },
        title: { S: "Laptop" },
      },
    };

    mockSend.mockResolvedValueOnce(fakeResponse);

    const factory = (data: ProductData) => new Product(data.id, data.title);

    // Provide all three arguments: key, factory, and metadata constructor
    const result = (await mapper.get({ id: "p001" }, factory, ProductData)) as Product;

    const command = mockSend.mock.calls[0][0];
    expect(command).toBeInstanceOf(GetItemCommand);
    expect(command.input.TableName).toBe("Products");
    expect(command.input.Key).toEqual({ id: { S: "p001" } });

    expect(result).toBeInstanceOf(Product);
    expect(result.id).toBe("p001");
    expect(result.title).toBe("Laptop");
  });
});
