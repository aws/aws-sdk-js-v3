import {
  EndpointBearer,
  HandlerExecutionContext,
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@aws-sdk/types";

export const serializerMiddleware = <Input extends object, Output extends object, RuntimeUtils extends EndpointBearer>(
  options: RuntimeUtils,
  serializer: RequestSerializer<any, RuntimeUtils>
): SerializeMiddleware<Input, Output> => (
  next: SerializeHandler<Input, Output>,
  context: HandlerExecutionContext
): SerializeHandler<Input, Output> => async (
  args: SerializeHandlerArguments<Input>
): Promise<SerializeHandlerOutput<Output>> => {
  const { logger, inputFilterSensitiveLog } = context;

  if (typeof logger?.info === "function") {
    logger.info({
      input: inputFilterSensitiveLog(args.input),
    });
  }

  const request = await serializer(args.input, options);

  if (typeof logger?.debug === "function") {
    logger.debug({
      httpRequest: request,
    });
  }

  return next({
    ...args,
    request,
  });
};
