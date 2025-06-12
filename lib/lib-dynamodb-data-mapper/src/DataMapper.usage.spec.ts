import { GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall as awsMarshall, unmarshall as awsUnmarshall } from "@aws-sdk/util-dynamodb";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { DataMapper } from "./DataMapper";
import { DataMarshaller } from "./marshaller";

// 🔁 Common mocks
const mockSend = vi.fn();
const mockClient = { send: mockSend } as any;

const mockMarshall = vi.spyOn(DataMarshaller, "marshall");
const mockUnmarshall = vi.spyOn(DataMarshaller, "unmarshallObject");
const mockMarshallKey = vi.spyOn(DataMarshaller, "marshallKey");

import type { AttributeValue } from "@aws-sdk/client-dynamodb";

import { DynamoDbSchema, DynamoDbTable, ItemSchema } from "./schema";

function mockPutResponse(returned: Record<string, AttributeValue>) {
  mockMarshall.mockReturnValueOnce(returned);
  mockUnmarshall.mockReturnValueOnce(returned);
  mockSend.mockResolvedValueOnce({ Attributes: returned });
}

function mockGetResponse(key: Record<string, AttributeValue>, item: Record<string, AttributeValue>) {
  mockMarshallKey.mockReturnValueOnce(key);
  mockUnmarshall.mockReturnValueOnce(item);
  mockSend.mockResolvedValueOnce({ Item: item });
}

beforeEach(() => {
  mockSend.mockReset();
  mockMarshall.mockReset();
  mockUnmarshall.mockReset();
  mockMarshallKey.mockReset();
});

describe("DataMapper - all usage variations", () => {
  it("plain TypeScript typed objects (T = D), no classes", async () => {
    type UserDefined = { id: string; name: string };
    const item: UserDefined = { id: "123", name: "Alice" };
    const marshalled = awsMarshall(item);

    class Placeholder {
      id!: string;
      name!: string;
    }

    const mapper = DataMapper.from<UserDefined, UserDefined>(Placeholder, { client: mockClient });

    expect(mapper["schema"]).toBeUndefined();
    expect(mapper["tableName"]).toBe("Placeholder");

    // mock put()
    mockSend.mockResolvedValueOnce({ Attributes: marshalled });

    const saved = await mapper.put(item);
    expect(saved).toEqual(item);

    const putCmd = mockSend.mock.calls[0][0];
    expect(putCmd).toBeInstanceOf(PutItemCommand);
    expect(putCmd.input.TableName).toBe("Placeholder");

    // mock get()
    mockSend.mockResolvedValueOnce({ Item: marshalled });

    const result = await mapper.get({ id: "123" });
    expect(result).toEqual(item);

    const getCmd = mockSend.mock.calls[1][0];
    expect(getCmd).toBeInstanceOf(GetItemCommand);
    expect(getCmd.input.Key).toEqual(awsMarshall({ id: "123" }));
  });

  it("class with no DynamoDB knowledge and with custom from/toDocument", async () => {
    type UserDefinedDocument = { id: string; name: string };

    class UserDefinedClass {
      id!: string;
      name!: string;

      public exampleMethod() {
        return `${this.id} ${this.name}`;
      }
    }

    const doc: UserDefinedDocument = { id: "123", name: "Alice" };
    const model = new UserDefinedClass();
    model.id = "123";
    model.name = "Alice";

    const marshalled = awsMarshall(doc);

    const mapper = DataMapper.from<UserDefinedDocument, UserDefinedClass>(UserDefinedClass, {
      client: mockClient,
      tableName: "test",
      fromDocument: (doc) => {
        const data = new UserDefinedClass();
        data.id = doc.id;
        data.name = doc.name;
        return data;
      },
      toDocument: (data) => ({
        id: data.id,
        name: data.name,
      }),
    });

    expect(mapper["schema"]).toBeUndefined();
    expect(mapper["tableName"]).toBe("test");

    // --- PUT ---
    mockSend.mockResolvedValueOnce({ Attributes: marshalled });

    const saved = await mapper.put(model);
    expect(saved).toBeInstanceOf(UserDefinedClass);
    expect(saved.id).toBe("123");

    // --- GET ---
    mockSend.mockResolvedValueOnce({ Item: marshalled });

    const loaded = (await mapper.get({ id: "123" })) as UserDefinedClass;
    expect(loaded).toBeInstanceOf(UserDefinedClass);
    expect(loaded.id).toBe("123");
    expect(loaded.name).toBe("Alice");
  });

  it("class with static transformer methods", async () => {
    type UserDefinedDocument = { id: string; name: string };

    class UserDefinedClass {
      id!: string;
      name!: string;

      public exampleMethod() {
        return `${this.id} ${this.name}`;
      }

      static fromDocument(doc: UserDefinedDocument): UserDefinedClass {
        const data = new UserDefinedClass();
        data.id = doc.id;
        data.name = doc.name;
        return data;
      }

      static toDocument(data: UserDefinedClass): UserDefinedDocument {
        return {
          id: data.id,
          name: data.name,
        };
      }
    }

    const doc: UserDefinedDocument = { id: "123", name: "Alice" };
    const instance = UserDefinedClass.fromDocument(doc);
    const marshalled = awsMarshall(doc);

    const mapper = DataMapper.from<UserDefinedDocument, UserDefinedClass>(UserDefinedClass, {
      client: mockClient,
      tableName: "test",
      fromDocument: UserDefinedClass.fromDocument,
      toDocument: UserDefinedClass.toDocument,
    });

    expect(mapper["schema"]).toBeUndefined();
    expect(mapper["tableName"]).toBe("test");

    // --- PUT ---
    mockSend.mockResolvedValueOnce({ Attributes: marshalled });

    const saved = await mapper.put(instance);
    expect(saved).toBeInstanceOf(UserDefinedClass);
    expect(saved.id).toBe("123");

    // --- GET ---
    mockSend.mockResolvedValueOnce({ Item: marshalled });

    const loaded = (await mapper.get({ id: "123" })) as UserDefinedClass;
    expect(loaded).toBeInstanceOf(UserDefinedClass);
    expect(loaded.id).toBe("123");
    expect(loaded.name).toBe("Alice");
  });

  it("class with metadata-based schema (protocol-based, no decorators)", async () => {
    type UserDefinedDocument = { id: string; name: string };

    class UserDefinedClass {
      id!: string;
      name!: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    };

    Object.defineProperty(UserDefinedClass, Symbol.for("DynamoDbSchema"), {
      value: schema,
    });

    Object.defineProperty(UserDefinedClass, DynamoDbTable, {
      value: "Users",
    });

    const doc: UserDefinedDocument = { id: "123", name: "Alice" };
    const instance = Object.assign(new UserDefinedClass(), doc);
    const marshalled = DataMarshaller.marshall(instance, schema as ItemSchema);

    const mapper = DataMapper.from<UserDefinedDocument, UserDefinedClass>(UserDefinedClass, { client: mockClient });

    expect(mapper["schema"]).toEqual(schema);
    expect(mapper["tableName"]).toBe("Users");

    // --- PUT ---
    mockSend.mockResolvedValueOnce({ Attributes: marshalled });

    const saved = await mapper.put(instance);
    expect(saved).toBeInstanceOf(UserDefinedClass);
    expect(saved.id).toBe("123");

    // --- GET ---
    mockSend.mockResolvedValueOnce({ Item: marshalled });

    const loaded = (await mapper.get({ id: "123" })) as UserDefinedClass;
    expect(loaded).toBeInstanceOf(UserDefinedClass);
    expect(loaded.id).toBe("123");
    expect(loaded.name).toBe("Alice");
  });

  it.skip("class with decorators", async () => {
    type UserDefinedDocument = {
      id: string;
      name: string;
    };

    // @dynamodbDocument()
    // class UserDefinedClass {
    //   @hashKey()
    //   id!: string;

    //   @attribute()
    //   name!: string;

    //   public exampleMethod() {
    //     return `${this.id} ${this.name}`;
    //   }
    // }

    // const doc: UserDefinedDocument = { id: "123", name: "Alice" };
    // const instance = Object.assign(new UserDefinedClass(), doc);

    // // Expected schema based on decorator behavior
    // const expectedSchema = {
    //   id: { type: "String", keyType: "HASH" },
    //   name: { type: "String" },
    // };

    // const marshalled = DataMarshaller.marshall(doc, expectedSchema);

    // const mapper = DataMapper.from<UserDefinedDocument, UserDefinedClass>(
    //   UserDefinedClass,
    //   {
    //     client: mockClient,
    //     tableName: "test",
    //   }
    // );

    // // Expected once decorators populate schema and table
    // expect(mapper["schema"]).toEqual(expectedSchema);
    // expect(mapper["tableName"]).toBe("test");

    // // --- PUT ---
    // mockSend.mockResolvedValueOnce({ Attributes: marshalled });

    // const saved = await mapper.put(instance);
    // expect(saved).toBeInstanceOf(UserDefinedClass);
    // expect(saved.id).toBe("123");

    // // --- GET ---
    // mockSend.mockResolvedValueOnce({ Item: marshalled });

    // const loaded = await mapper.get({ id: "123" });
    // expect(loaded).toBeInstanceOf(UserDefinedClass);
    // expect(loaded.id).toBe("123");
    // expect(loaded.name).toBe("Alice");
  });
});
