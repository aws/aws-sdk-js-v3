import { describe, expect,it } from 'vitest';

import type { Schema } from '../schema/Schema';
import { DynamoDbSchema, DynamoDbTable } from '../schema/schemaMetadata';
import { DataMarshaller } from './DataMarshaller';

class User {
  id!: string;
  name!: string;
  age?: number;
}

const schema: Schema = {
  id: { type: 'String', keyType: 'HASH' },
  name: { type: 'String', attributeName: 'full_name' },
  age: { type: 'Number' },
};

Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
Object.defineProperty(User.prototype, DynamoDbTable, { value: 'Users' });

describe('DataMarshaller', () => {
  const marshaller = new DataMarshaller(new User());

  it('should marshall full item', () => {
    const user = Object.assign(new User(), { id: '123', name: 'Alice', age: 30 });
    expect(marshaller.marshall(user)).toEqual({
      id: { S: '123' },
      full_name: { S: 'Alice' },
      age: { N: '30' },
    });
  });

  it('should marshall key only', () => {
    const user = Object.assign(new User(), { id: '123', name: 'X', age: 99 });
    expect(marshaller.marshallKey(user)).toEqual({
      id: { S: '123' },
    });
  });

  it('should unmarshall item', () => {
    const item = {
      id: { S: '123' },
      full_name: { S: 'Alice' },
      age: { N: '30' },
    };
    const result:User = marshaller.unmarshall(item);
    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe('123');
    expect(result.name).toBe('Alice');
    expect(result.age).toBe(30);
  });
});