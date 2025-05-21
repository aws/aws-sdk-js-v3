import { HttpRequest, HttpResponse } from '@smithy/protocol-http';
import { describe, expect, it, vi } from 'vitest';

import { DynamoDbSchema, DynamoDbTable } from '../schema/schemaMetadata';
import { unmarshallOutputMiddleware } from './unmarshallOutput';

class User {
  id!: string;
  name!: string;
}

const userSchema = {
  id: { type: 'String' },
  name: { type: 'String', attributeName: 'full_name' },
};

Object.defineProperty(User.prototype, DynamoDbSchema, { value: userSchema });
Object.defineProperty(User.prototype, DynamoDbTable, { value: 'Users' });

function createMockRequest(): HttpRequest {
  return new HttpRequest({
    method: 'POST',
    protocol: 'https:',
    path: '/',
    hostname: 'localhost',
  });
}

function createMockResponse(): HttpResponse {
  return new HttpResponse({
    statusCode: 200,
    body: '',
  });
}

function createMarshalledUser(attrs: Record<string, any>): any {
  return Object.assign(Object.create(User.prototype), attrs);
}

function createMockNext(output: Record<string, any>) {
  return vi.fn(async () => ({
    output,
    response: createMockResponse(),
  }));
}

describe('unmarshallOutputMiddleware', () => {
  it('should unmarshall Item into class instance using schema', async () => {
    const next = createMockNext({
      Item: createMarshalledUser({
        id: { S: 'u1' },
        full_name: { S: 'John' },
      }),
    });

    const handler = unmarshallOutputMiddleware(next, {} as any);
    const result = await handler({
      input: {},
      request: createMockRequest(),
    });

    expect(result.output.Item).toBeInstanceOf(User);
    expect(result.output.Item.id).toBe('u1');
    expect(result.output.Item.name).toBe('John');
  });

 it('should unmarshall Attributes when ReturnValues is used (PutCommand)', async () => {
  const marshalledAttributes = {
    id: { S: '123' },
    full_name: { S: 'OldName' },
  };

  Object.setPrototypeOf(marshalledAttributes, User.prototype);

  const next = vi.fn(async () => ({
    output: { Attributes: marshalledAttributes },
    response: createMockResponse(),
  }));

  const handler = unmarshallOutputMiddleware(next, {} as any);
  const result = await handler({
    input: {},
    request: createMockRequest(),
  });

  expect(result.output.Attributes).toBeInstanceOf(User);
  expect(result.output.Attributes.id).toBe('123');
  expect(result.output.Attributes.name).toBe('OldName');
});

  it('should skip unmarshalling if schema is missing', async () => {
    const next = createMockNext({
      Item: { id: { S: 'no-schema' } },
    });

    const handler = unmarshallOutputMiddleware(next, {} as any);
    const result = await handler({
      input: {},
      request: createMockRequest(),
    });

    expect(result.output.Item).toEqual({ id: { S: 'no-schema' } });
  });

  it('should return output unchanged if output is null', async () => {
    const next = vi.fn(async () => ({
      output: null,
      response: createMockResponse(),
    }));

    const handler = unmarshallOutputMiddleware(next, {} as any);
    const result = await handler({
      input: {},
      request: createMockRequest(),
    });

    expect(result.output).toBeNull();
  });

  it('should return output unchanged if output is not an object', async () => {
    const next = vi.fn(async () => ({
      output: 'string response',
      response: createMockResponse(),
    }));

    const handler = unmarshallOutputMiddleware(next, {} as any);
    const result = await handler({
      input: {},
      request: createMockRequest(),
    });

    expect(result.output).toBe('string response');
  });
});