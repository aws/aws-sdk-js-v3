import {
  BillingMode,
  CreateTableCommand,
  DeleteTableCommand,
  DescribeTableCommandOutput,
  DynamoDB,
  waitUntilTableExists,
} from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { randomUUID } from 'crypto';
import { afterAll, beforeAll, describe, expect, test as it } from 'vitest';

import { DataMapper } from '../DataMapper';

// This model's name will be used as the DynamoDB table name
class TestModel {
  id!: string;
  name!: string;
  age!: number;
}

describe(DataMapper.name, () => {
  it("should deny initialization with cacheMiddleware: true", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
      cacheMiddleware: true,
    });
    expect(() => {
      DynamoDBDocument.from(dynamodb);
    }).toThrow();
  });
});

describe(
  DynamoDBDocument.name,
  () => {
  const dynamodb = new DynamoDB({ region: 'us-west-2', maxAttempts: 10 });
  const docClient = DynamoDBDocument.from(dynamodb);
  const mapper = new DataMapper({ docClient });

  const randId = Math.random().toString(36).substring(2, 6);
  const timestamp = Math.floor(Date.now() / 1000);
  const TableName = `${TestModel.name}-${timestamp}-${randId}`;

  const log = {
    describe: null as null | DescribeTableCommandOutput,
    put: null as any,
    get: null as any,
  };

  const testItem: TestModel = {
    id: randomUUID(),
    name: 'Alice',
    age: 30,
  };

  beforeAll(async () => {
    log.describe = await dynamodb.describeTable({ TableName }).catch(() => null);

    if (!log.describe?.Table) {
      await dynamodb.send(
        new CreateTableCommand({
          TableName,
          AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
          KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
          BillingMode: BillingMode.PAY_PER_REQUEST,
        })
      );
      await waitUntilTableExists({  client: dynamodb, maxWaitTime: 120 }, { TableName });
    }

    // Dynamically override the class name used by getTableName(model)
    Object.defineProperty(TestModel, 'name', {
      value: TableName,
    });

    log.put = await mapper.put(Object.assign(new TestModel(), testItem));
    log.get = await mapper.get({ id: testItem.id }, TestModel);
  }, 30_000);

  afterAll(async () => {
    await dynamodb.send(new DeleteTableCommand({ TableName }));
  });

  it('should create or reuse the test table', () => {
    expect(TableName).toMatch(/^TestModel-/);
  });

  it('should put the item', () => {
    expect(log.put).toEqual(testItem);
  });

  it('should get the item back', () => {
    expect(log.get).toEqual(testItem);
  });
});