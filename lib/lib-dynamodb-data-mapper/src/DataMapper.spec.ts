import {   
  GetItemCommand,
  PutItemCommand,  
 } from '@aws-sdk/client-dynamodb';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { DataMapper } from './DataMapper';
import { DynamoDbSchema, DynamoDbTable } from './schema';

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

describe('DataMapper', () => {
  it('should send PutItemCommand with marshalled input', async () => {
    const mapper = DataMapper.from(mockClient);
    const user = { id: '123', name: 'Alice' };

    const schema = {
      id: { type: 'String', keyType: 'HASH' },
      name: { type: 'String' },
    };

    Object.defineProperty(user, DynamoDbTable, { value: 'Users' });
    Object.defineProperty(user, DynamoDbSchema, { value: schema });

    mockSend.mockResolvedValueOnce({});

    await mapper.put(user);

    const command = mockSend.mock.calls[0][0];
    expect(command).toBeInstanceOf(PutItemCommand);
    expect(command.input.TableName).toBe('Users');
    expect(command.input.Item).toEqual({
      id: { S: '123' },
      name: { S: 'Alice' },
    });
  });

  it('should send GetItemCommand and unmarshall result', async () => {
  class User {
    id!: string;
    name?: string;
  }

  const schema = {
    id: { type: 'String', keyType: 'HASH' },
    name: { type: 'String' },
  };

  Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
  Object.defineProperty(User.prototype, DynamoDbTable, { value: 'Users' });

  const mapper = DataMapper.from(mockClient);

  const fakeResponse = {
    Item: {
      id: { S: '123' },
      name: { S: 'Alice' },
    },
  };

  mockSend.mockResolvedValueOnce(fakeResponse);

  const result = await mapper.get({ id: '123' }, User) as User;

  const command = mockSend.mock.calls[0][0];
  expect(command).toBeInstanceOf(GetItemCommand);
  expect(command.input.TableName).toBe('Users');
  expect(command.input.Key).toEqual({ id: { S: '123' } });

  expect(result).toBeInstanceOf(User);
  expect(result.id).toBe('123');
  expect(result.name).toBe('Alice');
});
});