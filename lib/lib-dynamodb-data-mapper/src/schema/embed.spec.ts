import { embed } from './embed';
import { DynamoDbSchema } from './schemaMetadata';

describe('embed', () => {
  const schema = { foo: { type: 'String' } };

  class Embeddable {}
  Object.defineProperty(Embeddable.prototype, DynamoDbSchema as any, {
    value: schema,
  });

  it('should return a DocumentType using the embedded schema of a document constructor', () => {
    const schemaType = embed(Embeddable);

    expect(schemaType.type).toBe('Document');
    expect(schemaType.members).toEqual(schema);
    expect(schemaType.valueConstructor).toBe(Embeddable);
  });

  it('should pass through a defined attributeName', () => {
    const attributeName = 'attributeName';
    const schemaType = embed(Embeddable, { attributeName });

    expect(schemaType.attributeName).toBe(attributeName);
  });

  it('should pass through a defined defaultProvider', () => {
    const defaultProvider = () => new Embeddable();
    const schemaType = embed(Embeddable, { defaultProvider });

    expect(schemaType.defaultProvider).toBe(defaultProvider);
  });
});