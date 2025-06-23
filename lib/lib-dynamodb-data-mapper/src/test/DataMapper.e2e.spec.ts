import {
  BillingMode,
  CreateTableCommand,
  DeleteTableCommand,
  DynamoDB,
  waitUntilTableExists,
} from "@aws-sdk/client-dynamodb";
import { randomUUID } from "crypto";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { DataMapper } from "../DataMapper";
import { DynamoDbSchema, DynamoDbTable } from "../schema";

const tableName = `SchemaModel-${Math.random().toString(36).substring(2, 8)}`;

class SchemaModel {
  id!: string;
  name!: string;
  age!: number;
}

// Attach schema + table metadata on the prototype
Object.defineProperty(SchemaModel.prototype, DynamoDbSchema, {
  value: {
    id: { type: "String", keyType: "HASH" },
    name: { type: "String" },
    age: { type: "Number" },
  },
});

Object.defineProperty(SchemaModel.prototype, DynamoDbTable, {
  value: tableName,
});

describe(DataMapper.name, () => {
  const dynamodb = new DynamoDB({ region: "us-west-2" });
  const mapper = DataMapper.from(dynamodb);

  beforeAll(async () => {
    const exists = await dynamodb.describeTable({ TableName: tableName }).catch(() => null);

    if (!exists?.Table) {
      await dynamodb.send(
        new CreateTableCommand({
          TableName: tableName,
          AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
          KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
          BillingMode: BillingMode.PAY_PER_REQUEST,
        })
      );

      await waitUntilTableExists({ client: dynamodb, maxWaitTime: 60 }, { TableName: tableName });
    }
  }, 60_000);

  afterAll(async () => {
    await dynamodb.send(new DeleteTableCommand({ TableName: tableName }));
  });

  it("should put and get item using schema-aware marshalling", async () => {
    const item = new SchemaModel();
    item.id = randomUUID();
    item.name = "Test User";
    item.age = 42;

    // Put item
    const result = await mapper.put(item);
    expect(result).toEqual(item);

    // Get item
    const factory = (data: SchemaModel): SchemaModel => Object.assign(new SchemaModel(), data);
    const fetched = await mapper.get({ id: item.id }, factory, SchemaModel);
    expect(fetched).toBeInstanceOf(SchemaModel);
    expect(fetched).toEqual(item);
  });

  it("should put and get item using a factory and schema constructor", async () => {
    class Raw {
      id!: string;
      name!: string;
    }

    Object.defineProperty(Raw.prototype, DynamoDbSchema, {
      value: {
        id: { type: "String", keyType: "HASH" },
        name: { type: "String" },
      },
    });

    Object.defineProperty(Raw.prototype, DynamoDbTable, {
      value: tableName,
    });

    class ViewModel {
      constructor(public id: string, public name: string) {}
      static from(raw: Raw) {
        return new ViewModel(raw.id, raw.name.toUpperCase());
      }
    }

    const record: Raw = { id: randomUUID(), name: "bob" };

    // Save raw DTO
    const saved = await mapper.put(record);
    expect(saved).toEqual(record);

    // Fetch and hydrate
    const fetched = (await mapper.get({ id: record.id }, ViewModel.from, Raw)) as ViewModel;
    expect(fetched).toBeInstanceOf(ViewModel);
    expect(fetched.id).toBe(record.id);
    expect(fetched.name).toBe("BOB");
  });
});
