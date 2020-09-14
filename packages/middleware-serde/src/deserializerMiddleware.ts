import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  DeserializeMiddleware,
  HandlerExecutionContext,
  ResponseDeserializer,
} from "@aws-sdk/types";

export const deserializerMiddleware = <Input extends object, Output extends object, RuntimeUtils = any>(
  options: RuntimeUtils,
  deserializer: ResponseDeserializer<any, any, RuntimeUtils>
): DeserializeMiddleware<Input, Output> => (
  next: DeserializeHandler<Input, Output>,
  context: HandlerExecutionContext
): DeserializeHandler<Input, Output> => async (
  args: DeserializeHandlerArguments<Input>
): Promise<DeserializeHandlerOutput<Output>> => {
  const { logger, outputFilterSensitiveLog } = context;

  const { response } = await next(args);

  if (typeof logger?.debug === "function") {
    logger.debug({
      httpResponse: response,
    });
  }

  const parsed = await deserializer(response, options);

  // Log parsed after $metadata is removed in https://github.com/aws/aws-sdk-js-v3/issues/1490
  const { $metadata, ...outputWithoutMetadata } = parsed;

  if (typeof logger?.info === "function") {
    logger.info({
      output: outputFilterSensitiveLog(outputWithoutMetadata),
    });
  }

  return {
    response,
    output: parsed as Output,
  };
};
