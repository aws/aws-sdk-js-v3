import type {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  DeserializeMiddleware,
} from '@smithy/types';

import { DataMarshaller } from '../marshaller/';

function tryUnmarshall(value: any): any {
  try {
    const marshaller = new DataMarshaller(value);
    return marshaller.unmarshall(value);
  } catch {
    return value;
  }
}

export const unmarshallOutputMiddleware: DeserializeMiddleware<any, any> =
  (next: DeserializeHandler<any, any>) =>
  async (args: DeserializeHandlerArguments<any>): Promise<DeserializeHandlerOutput<any>> => {
        const result = await next(args);

    if (!result.output || typeof result.output !== 'object') {
      return result;
    }

    const output = { ...result.output };

    if (output.Item) {
      output.Item = tryUnmarshall(output.Item);
    }

    if (output.Attributes) {
      output.Attributes = tryUnmarshall(output.Attributes);
    }

    return {
      ...result,
      output,
    };
  };