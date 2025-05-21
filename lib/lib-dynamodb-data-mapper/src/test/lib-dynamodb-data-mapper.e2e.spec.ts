import {
  BillingMode,
  CreateTableCommand,
  DeleteTableCommand,
  DynamoDB,
  waitUntilTableExists,
} from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { randomUUID } from 'crypto';
import { afterAll, beforeAll, describe, expect, test as it } from 'vitest';

import { DataMapper } from '../DataMapper';
import { DynamoDbSchema as DYNAMODB_SCHEMA, DynamoDbTable as DYNAMODB_TABLE } from '../schema/schemaMetadata';

class SchemaModel {
  id!: string;
  name!: string;
  age!: number;
}

const schema = {
  id: { type: 'String', keyType: 'HASH' },
  name: { type: 'String' },
  age: { type: 'Number' },
};

Object.defineProperty(SchemaModel.prototype, DYNAMODB_SCHEMA, { value: schema });

describe(DataMapper.name, () => {
  const dynamodb = new DynamoDB({ region: 'us-west-2' });
  const docClient = DynamoDBDocument.from(dynamodb);
  const mapper = new DataMapper({ docClient });

  const testData = {
    noSchema: {
      item: { id: randomUUID(), name: 'NoSchema', age: 40 },
      table: `NoSchema-${Math.random().toString(36).substring(2, 6)}`,
    },
    schema: {
      item: Object.assign(new SchemaModel(), {
        id: randomUUID(),
        name: 'WithSchema',
        age: 50,
      }),
      table: `SchemaModel-${Math.random().toString(36).substring(2, 6)}`,
    },
  };

  beforeAll(async () => {
    for (const data of Object.values(testData)) {
      const { item, table } = data;

      Object.defineProperty(item.constructor.prototype, DYNAMODB_TABLE, {
        value: table,
      });

      const exists = await dynamodb.describeTable({ TableName: table }).catch(() => null);

      if (!exists?.Table) {
        await dynamodb.send(
          new CreateTableCommand({
            TableName: table,
            AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
            KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
            BillingMode: BillingMode.PAY_PER_REQUEST,
          })
        );
        await waitUntilTableExists({ client: dynamodb, maxWaitTime: 60 }, { TableName: table });
      }
    }
  }, 60_000);

  afterAll(async () => {
    for (const { table } of Object.values(testData)) {
      await dynamodb.send(new DeleteTableCommand({ TableName: table }));
    }
  });

  it('should handle item with no schema (SDK marshalling)', async () => {
    const { item, table } = testData.noSchema;

    const result = await mapper.put({ TableName: table, Item: item });
    expect(result).toEqual(item);

    const fetched = await mapper.get({ TableName: table, Key: { id: item.id } });
    expect(fetched).toEqual(item);
  });

  it('should handle item with schema on prototype (custom marshalling)', async () => {
    const { item } = testData.schema;

    const result = await mapper.put({ Item: item } as any);
    expect(result).toEqual(item);

    const fetched = await mapper.get({ Key: { id: item.id } } as any);
    expect(fetched).toEqual(item);
  });
});