import {
  BillingMode,
  CreateTableCommand,
  DeleteTableCommand,
  DynamoDB,
  waitUntilTableExists,
} from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'crypto';
import { afterAll, beforeAll, describe, expect, test as it } from 'vitest';

import { DataMapper } from '../DataMapper';
import { DynamoDbSchema, DynamoDbTable } from '../schema';

const tableName = `SchemaModel-${Math.random().toString(36).substring(2, 8)}`;

class SchemaModel {
  id!: string;
  name!: string;
  age!: number;
}

// Attach schema + table metadata on the prototype
Object.defineProperty(SchemaModel.prototype, DynamoDbSchema, {
  value: {
    id: { type: 'String', keyType: 'HASH' },
    name: { type: 'String' },
    age: { type: 'Number' },
  },
});

Object.defineProperty(SchemaModel.prototype, DynamoDbTable, {
  value: tableName,
});

describe(DataMapper.name, () => {
  const dynamodb = new DynamoDB({ region: 'us-west-2' });
  const mapper = DataMapper.from(dynamodb);

  beforeAll(async () => {
    const exists = await dynamodb.describeTable({ TableName: tableName }).catch(() => null);

    if (!exists?.Table) {
      await dynamodb.send(
        new CreateTableCommand({
          TableName: tableName,
          AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
          KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
          BillingMode: BillingMode.PAY_PER_REQUEST,
        })
      );

      await waitUntilTableExists(
        { client: dynamodb, maxWaitTime: 60 },
        { TableName: tableName }
      );
    }
  }, 60_000);

  afterAll(async () => {
    await dynamodb.send(new DeleteTableCommand({ TableName: tableName }));
  });

  it('should put and get item using schema-aware marshalling', async () => {
    const item = new SchemaModel();
    item.id = randomUUID();
    item.name = 'Test User';
    item.age = 42;

    // Put item
    const result = await mapper.put(item);
    expect(result).toEqual(item);

    // Get item
    const fetched = await mapper.get({ id: item.id }, SchemaModel);
    expect(fetched).toBeInstanceOf(SchemaModel);
    expect(fetched).toEqual(item);
  });
});