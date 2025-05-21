import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { afterEach,beforeEach, describe, expect, it, vi } from 'vitest';

import { DataMapper } from './DataMapper';


const mockSend = vi.fn();

const mockClient = {
  send: mockSend,
  middlewareStack: {
    add: vi.fn(),
    addRelativeTo: vi.fn(),
  },
} as any;

beforeEach(() => {
  mockSend.mockReset();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('DataMapper', () => {
  it('should send PutCommand with provided input', async () => {
    const mapper = new DataMapper({ docClient: mockClient });
    const input = { TableName: 'Users', Item: { id: '123' } };
    mockSend.mockResolvedValueOnce({});

    await mapper.put(input);

    const sentCommand = mockSend.mock.calls[0][0];
    expect(sentCommand).toBeInstanceOf(PutCommand);
    expect(sentCommand.input).toEqual(input);
  });

  it('should send GetCommand with provided input', async () => {
    const mapper = new DataMapper({ docClient: mockClient });
    const input = { TableName: 'Users', Key: { id: '123' } };
    const fakeResponse = { Item: { id: { S: '123' } } };
    mockSend.mockResolvedValueOnce(fakeResponse);

    const result = await mapper.get(input);

    const sentCommand = mockSend.mock.calls[0][0];
    expect(sentCommand).toBeInstanceOf(GetCommand);
    expect(sentCommand.input).toEqual(input);
    expect(result).toEqual(fakeResponse);
  });

  it('should register schema-aware middlewares on init', () => {
    new DataMapper({ docClient: mockClient });
    expect(mockClient.middlewareStack.addRelativeTo).toHaveBeenCalled();
    expect(mockClient.middlewareStack.add).toHaveBeenCalled();
  });
});