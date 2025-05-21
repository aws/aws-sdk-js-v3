import { describe, expect,it } from 'vitest';

import type { Schema } from '../../schema/Schema';
import { unmarshallItem } from './unmarshallItem';

class TestModel {
  id?: string;
  active?: boolean;
}

describe('unmarshallItem', () => {
  const schema: Schema = {
    id: { type: 'String' },
    active: { type: 'Boolean' },
  };

  it('should create a class instance with unmarshalled values', () => {
    const input = {
      id: { S: 'abc' },
      active: { BOOL: true },
    };
    const result = unmarshallItem(schema, input, TestModel);
    expect(result).toBeInstanceOf(TestModel);
    expect(result.id).toBe('abc');
    expect(result.active).toBe(true);
  });

  it('should return a plain object if no constructor is provided', () => {
    const input = {
      id: { S: 'abc' },
    };
    const result = unmarshallItem(schema, input);
    expect(result).toEqual({ id: 'abc' });
  });
});