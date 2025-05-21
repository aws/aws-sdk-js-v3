import { describe, expect, it, vi } from 'vitest';

import { DynamoDbSchema, DynamoDbTable } from '../schema/schemaMetadata';
import { marshallInputMiddleware } from './marshallInput';

function defineSchema(target: object, schema: any, tableName: string) {
  Object.defineProperty(target, DynamoDbSchema, { value: schema });
  Object.defineProperty(target, DynamoDbTable, { value: tableName });
}

function createHandler() {
  const next = vi.fn(async (args) => ({ output: { calledWith: args.input } }));
  return { handler: marshallInputMiddleware(next as any, {} as any), next };
}

function expectMarshalledOutput(actual: any, field: 'Item' | 'Key', expected: any, tableName: string) {
  expect(actual[field]).toEqual(expected);
  expect(actual.TableName).toBe(tableName);
  expect(actual._sdkMarshallSkipped).toBe(true);
}

describe('marshallInputMiddleware', () => {
  it('should skip marshalling if Item is missing', async () => {
    const { handler } = createHandler();
    const input = { TableName: 'Users' };
    const result = await handler({ input });
    expect(result.output.calledWith).toEqual(input);
  });

  it('should skip marshalling if schema is missing', async () => {
    const { handler } = createHandler();
    const input = { TableName: 'Users', Item: { id: '123' } };
    const result = await handler({ input });
    expect(result.output.calledWith).toEqual(input);
  });

  it('should marshall Item using schema metadata', async () => {
    class User {
      id!: string;
      name!: string;
    }

    defineSchema(User.prototype, {
      id: { type: 'String' },
      name: { type: 'String', attributeName: 'full_name' },
    }, 'Users');

    const user = Object.assign(new User(), { id: 'u1', name: 'John' });
    const { handler } = createHandler();
    const result = await handler({ input: { Item: user } });

    expectMarshalledOutput(result.output.calledWith, 'Item', {
      id: { S: 'u1' },
      full_name: { S: 'John' },
    }, 'Users');
  });

  it('should marshall Key using schema metadata', async () => {
    class UserKey {
      id!: string;
    }

    defineSchema(UserKey.prototype, {
      id: { type: 'String', keyType: 'HASH' },
    }, 'Users');

    const key = Object.assign(new UserKey(), { id: 'u1' });
    const { handler } = createHandler();
    const result = await handler({ input: { Key: key } });

    expectMarshalledOutput(result.output.calledWith, 'Key', {
      id: { S: 'u1' },
    }, 'Users');
  });
});