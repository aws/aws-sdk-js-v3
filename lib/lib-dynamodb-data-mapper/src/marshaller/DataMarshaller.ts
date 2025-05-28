import type { AttributeValue } from '@aws-sdk/client-dynamodb';
import { marshallOptions } from '@aws-sdk/util-dynamodb';

import { Schema } from '../schema';
import { marshallItem } from './core/marshallItem';
import { unmarshallItem } from './core/unmarshallItem';
import { marshallKey } from './key/marshallKey';

export class DataMarshaller {
  static marshall<T extends object>(input: T, schema: Schema, options: marshallOptions = {}): Record<string, AttributeValue> {
    return marshallItem(schema, input, options);
  }

  static marshallKey<T extends object>(input: T, schema: Schema, options: marshallOptions = {}, indexName?: string): Record<string, AttributeValue> {
    return marshallKey(schema, input, indexName, options);
  }

  static unmarshall<T extends object>(item: Record<string, AttributeValue>, schema: Schema, model: new () => T): T {
    return unmarshallItem(schema, item, model);
  }
}