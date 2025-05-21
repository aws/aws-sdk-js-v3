import { describe, expect, it, vi } from 'vitest';

import { registerSchemaMiddleware } from './registerSchemaMiddleware';

const dummyMiddlewareStack = {
  addRelativeTo: vi.fn(),
  add: vi.fn(),
};

const fakeClient = {
  middlewareStack: dummyMiddlewareStack,
} as any;

describe('registerSchemaMiddleware', () => {
  it('should register marshall and unmarshall middlewares', () => {
    registerSchemaMiddleware(fakeClient);

    expect(dummyMiddlewareStack.addRelativeTo).toHaveBeenCalledWith(expect.any(Function), {
      relation: 'before',
      toMiddleware: 'awsAuthMiddleware',
      name: 'SchemaAwareMarshaller',
    });

    expect(dummyMiddlewareStack.add).toHaveBeenCalledWith(expect.any(Function), {
      step: 'deserialize',
      name: 'SchemaAwareUnmarshaller',
      priority: 'low',
    });
  });
});