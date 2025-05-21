import type { AttributeValue } from '@aws-sdk/client-dynamodb';
import { marshallOptions } from '@aws-sdk/util-dynamodb';

import { getSchema, Schema } from '../schema';
import { marshallItem } from './core/marshallItem';
import { unmarshallItem } from './core/unmarshallItem';
import { marshallKey } from './key/marshallKey';

export class DataMarshaller {
  private readonly schema: Schema;
  private readonly model: new () => any;

  constructor(input: object) {
    this.model = (input as any).constructor;
    this.schema = getSchema(input);
  }

  marshall<T extends object>(input: T, options: marshallOptions = {}): Record<string, AttributeValue> {
    return marshallItem(this.schema, input, options);
  }

  marshallKey<T extends object>(input: T, options: marshallOptions = {}, indexName?: string): Record<string, AttributeValue> {
    return marshallKey(this.schema, input, indexName, options);
  }

  unmarshall<T extends object>(item: Record<string, AttributeValue>): T {
    return unmarshallItem(this.schema, item, this.model);
  }
}