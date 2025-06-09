import { describe, it, expect, vi, beforeEach } from "vitest";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { DataMapper } from "./DataMapper";
import { DataMarshaller } from "./marshaller";
import { marshall as awsMarshall } from "@aws-sdk/util-dynamodb";
import { DynamoDbSchema, ItemSchema } from "./schema";
import "reflect-metadata";

class Placeholder { id!: string; name!: string; }
class UserDefinedClass {
  id!: string;
  name!: string;
  exampleMethod() { return `${this.id} ${this.name}`; }
}
class DecoratedClass { id!: string; name!: string; }

const schema: ItemSchema = {
  id: { type: "String", keyType: "HASH" },
  name: { type: "String" },
};

const useCases = [
  {
    description: "plain typescript object, no class",
    model: Placeholder,
    tableName: "Placeholder",
    document: { id: "123", name: "Alice" },
    instance: { id: "123", name: "Alice" },
  },
  {
    description: "class with no DynamoDB knowledge and custom transformers",
    model: UserDefinedClass,
    tableName: "Users",
    document: { id: "123", name: "Alice" },
    instance: Object.assign(new UserDefinedClass(), { id: "123", name: "Alice" }),
    fromDocument: (doc: any) => Object.assign(new UserDefinedClass(), doc),
    toDocument: (data: any) => ({ id: data.id, name: data.name }),
  },
  {
    description: "class with static transformer methods",
    document: { id: "123", name: "Alice" },
    instance: Object.assign(new UserDefinedClass(), { id: "123", name: "Alice" }),
    model: UserDefinedClass,
    tableName: "test",
    fromDocument: UserDefinedClass["fromDocument"] || ((doc) => Object.assign(new UserDefinedClass(), doc)),
    toDocument: UserDefinedClass["toDocument"] || ((data) => ({ id: data.id, name: data.name })),
  },
  {
    description: "class with schema metadata (protocol-based)",
    model: UserDefinedClass,
    schema,
    tableName: "Users",
    document: { id: "123", name: "Alice" },
    instance: Object.assign(new UserDefinedClass(), { id: "123", name: "Alice" }),
    fromDocument: (doc: any) => Object.assign(new UserDefinedClass(), doc),
    toDocument: (data: any) => ({ id: data.id, name: data.name }),
  },
  {
    description: "class with decorators",
    model: DecoratedClass,
    tableName: "test",
    document: { id: "123", name: "Alice" },
    instance: Object.assign(new DecoratedClass(), { id: "123", name: "Alice" }),
    skip: true
  }
];

describe("DataMapper", () => {
  const mockSend = vi.fn();
  const mockClient = { send: mockSend } as any;

  beforeEach(() => {
    mockSend.mockReset();
  });

  describe("from() factory", () => {
    for (const { description, model, tableName, schema, fromDocument, toDocument, skip } of useCases) {
      const run = skip ? it.skip : it;
      run(`constructs correctly for ${description}`, () => {
        if (schema) Object.defineProperty(model, DynamoDbSchema, { value: schema });

        const mapper = DataMapper.from(model, {
          client: mockClient,
          schema,
          tableName,
          fromDocument,
          toDocument,
        });

        expect(mapper).toBeInstanceOf(DataMapper);
        expect(mapper["tableName"]).toBe(tableName);
        expect(typeof mapper["fromDocument"]).toBe("function");
        expect(typeof mapper["toDocument"]).toBe("function");
        if (schema) expect(mapper["schema"]).toEqual(schema);
      });
    }
  });

  describe("put", () => {
    for (const { description, model, tableName, document, instance, schema, fromDocument, toDocument, skip } of useCases) {
      const run = skip ? it.skip : it;
      run(`put() works correctly for ${description}`, async () => {
        if (schema) Object.defineProperty(model, DynamoDbSchema, { value: schema });
        const marshalled = schema ? DataMarshaller.marshall(document, schema) : awsMarshall(document);

        const mapper = DataMapper.from(model, {
          client: mockClient,
          schema,
          tableName,
          fromDocument,
          toDocument,
        });

        mockSend.mockResolvedValueOnce({ Attributes: marshalled });

        const result = await mapper.put(instance);
        expect(result).toMatchObject(document);

        const cmd = mockSend.mock.calls[0][0];
        expect(cmd).toBeInstanceOf(PutItemCommand);
        expect(cmd.input.TableName).toBe(tableName);
        expect(cmd.input.Item).toEqual(marshalled);
      });
    }
  });

  describe("get", () => {
    for (const { description, model, tableName, document, instance, schema, fromDocument, toDocument, skip } of useCases) {
      const run = skip ? it.skip : it;
      run(`get() works correctly for ${description}`, async () => {
        if (schema) Object.defineProperty(model, DynamoDbSchema, { value: schema });
        const marshalled = schema ? DataMarshaller.marshall(document, schema) : awsMarshall(document);

        const mapper = DataMapper.from(model, {
          client: mockClient,
          schema,
          tableName,
          fromDocument,
          toDocument,
        });

        mockSend.mockResolvedValueOnce({ Item: marshalled });

        const result = await mapper.get({ id: "123" });
        expect(result).toMatchObject(document);

        const cmd = mockSend.mock.calls[0][0];
        expect(cmd).toBeInstanceOf(GetItemCommand);
        expect(cmd.input.TableName).toBe(tableName);
      });
    }
  });

  describe("delete", () => {
    it("throws not implemented", async () => {
      const mapper = DataMapper.from(Placeholder, { client: mockClient, tableName: "test" });
      await expect(mapper.delete()).rejects.toThrow("not implemented");
    });
  });

  describe("query", () => {
    it("throws not implemented", async () => {
      const mapper = DataMapper.from(Placeholder, { client: mockClient, tableName: "test" });
      const iterator = mapper.query()[Symbol.asyncIterator]();
      await expect(iterator.next()).rejects.toThrow("not implemented");
    });
  });

  describe("scan", () => {
    it("throws not implemented", async () => {
      const mapper = DataMapper.from(Placeholder, { client: mockClient, tableName: "test" });
      const iter = mapper.scan()[Symbol.asyncIterator]();;
      await expect(iter.next()).rejects.toThrow("not implemented");
    });
  });
});