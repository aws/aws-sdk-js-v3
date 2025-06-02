import { describe, expect,it } from 'vitest';

import { unmarshallValue } from './unmarshallValue';

const epoch = 946684800;
const buffer = new Uint8Array([1, 2, 3]);

describe('unmarshallValue', () => {
  it('should unmarshall a string', () => {
    expect(unmarshallValue({ type: 'String' }, { S: 'hello' })).toBe('hello');
  });

  it('should unmarshall a number', () => {
    expect(unmarshallValue({ type: 'Number' }, { N: '123' })).toBe(123);
  });

  it('should unmarshall a boolean', () => {
    expect(unmarshallValue({ type: 'Boolean' }, { BOOL: true })).toBe(true);
  });

  it('should unmarshall a date', () => {
    expect(unmarshallValue({ type: 'Date' }, { N: epoch.toString() }))
      .toEqual(new Date(epoch * 1000));
  });

  it('should unmarshall null to null', () => {
    expect(unmarshallValue({ type: 'Null' }, { NULL: true })).toBeNull();
  });

  it('should unmarshall list of numbers', () => {
    expect(unmarshallValue({ type: 'List', memberType: { type: 'Number' } }, { L: [{ N: '1' }, { N: '2' }] }))
      .toEqual([1, 2]);
  });

  it('should unmarshall map of strings', () => {
    expect(unmarshallValue({ type: 'Map', memberType: { type: 'String' } }, { M: { x: { S: 'y' } } }))
      .toEqual({ x: 'y' });
  });

  it('should unmarshall a tuple', () => {
    expect(unmarshallValue({
      type: 'Tuple',
      members: [{ type: 'Boolean' }, { type: 'Number' }]
    }, { L: [{ BOOL: true }, { N: '99' }] })).toEqual([true, 99]);
  });

  it('should unmarshall string set', () => {
    expect(unmarshallValue({ type: 'Set', memberType: 'String' }, { SS: ['a', 'b'] }))
      .toEqual(new Set(['a', 'b']));
  });

  it('should unmarshall number set', () => {
    expect(unmarshallValue({ type: 'Set', memberType: 'Number' }, { NS: ['1', '2'] }))
      .toEqual(new Set([1, 2]));
  });

  it('should unmarshall binary set', () => {
    expect(unmarshallValue({ type: 'Set', memberType: 'Binary' }, { BS: [buffer] }))
      .toEqual(new Set([buffer]));
  });

  it('should unmarshall document deeply', () => {
    expect(unmarshallValue({
      type: 'Document',
      members: {
        nested: { type: 'Document', members: { id: { type: 'String' } } },
      },
      valueConstructor: class {}
    }, { M: { nested: { M: { id: { S: 'x' } } } } })).toEqual({ nested: { id: 'x' } });
  });
});
