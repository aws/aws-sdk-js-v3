import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  DeserializeMiddleware,
  HandlerExecutionContext,
  ResponseDeserializer,
} from "@aws-sdk/types";

export const deserializerMiddleware =
  <Input extends object, Output extends object, RuntimeUtils = any>(
    options: RuntimeUtils,
    deserializer: ResponseDeserializer<any, any, RuntimeUtils>
  ): DeserializeMiddleware<Input, Output> =>
  (next: DeserializeHandler<Input, Output>, context: HandlerExecutionContext): DeserializeHandler<Input, Output> =>
  async (args: DeserializeHandlerArguments<Input>): Promise<DeserializeHandlerOutput<Output>> => {
    const { response } = await next(args);
    try {
      const parsed = await deserializer(response, options);
      return {
        response,
        output: parsed as Output,
      };
    } catch (error) {
      // For security reasons, the error response is not completely visible by default.
      Object.defineProperty(error, "$response", {
        value: response,
      });

      if (!('$metadata' in error)) {
        // only apply this to non-ServiceException.
        const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        error.message += "\n  " + hint;
      }

      throw error;
    }
  };
