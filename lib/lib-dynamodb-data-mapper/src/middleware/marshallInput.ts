import type {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  InitializeMiddleware,
} from '@smithy/types';

import { DataMarshaller } from '../marshaller/DataMarshaller';
import { getTableName } from '../schema/schemaMetadata';

/**
 * Attempts to marshall input.Item using schema metadata.
 */
function tryMarshallItem(input: Record<string, any>): Record<string, any> {
  if (!input.Item) return input;

  try {
    const marshaller = new DataMarshaller(input.Item);
    return {
      ...input,
      TableName: getTableName(input.Item),
      Item: marshaller.marshall(input.Item),
      _sdkMarshallSkipped: true,
    };
  } catch {
    return input;
  }
}

/**
 * Attempts to marshall input.Key using schema metadata.
 */
function tryMarshallKey(input: Record<string, any>): Record<string, any> {
  if (!input.Key) return input;

  try {
    const marshaller = new DataMarshaller(input.Key);
    return {
      ...input,
      TableName: getTableName(input.Key),
      Key: marshaller.marshallKey(input.Key),
      _sdkMarshallSkipped: true,
    };
  } catch {
    return input;
  }
}

/**
 * Middleware that applies schema-aware marshalling for PutCommand and GetCommand.
 * It supports marshalling for `Item` and `Key`, and disables default marshalling
 * via `_sdkMarshallSkipped`.
 */
export const marshallInputMiddleware: InitializeMiddleware<any, any> =
  (next: InitializeHandler<any, any>) =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<any>> => {
    let input = args.input;

    input = tryMarshallItem(input);
    input = tryMarshallKey(input);

    return next({ ...args, input });
  };