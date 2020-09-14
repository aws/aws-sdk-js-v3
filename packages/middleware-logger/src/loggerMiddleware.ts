import {
  AbsoluteLocation,
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

export const loggerMiddleware = () => <Output extends MetadataBearer = MetadataBearer>(
  next: BuildHandler<any, Output>,
  context: HandlerExecutionContext
): BuildHandler<any, Output> => async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
  const { logger, inputFilterSensitiveLog, outputFilterSensitiveLog } = context;

  const response = await next(args);

  if (!logger) {
    return response;
  }

  const {
    output: { $metadata, ...outputWithoutMetadata },
  } = response;

  if (typeof logger.debug === "function") {
    logger.debug({
      httpRequest: args.request,
    });
    logger.debug({
      httpResponse: response.response,
    });
  }

  if (typeof logger.info === "function") {
    logger.info({
      $metadata,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
    });
  }

  return response;
};

export const loggerMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "build",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLoggerPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  },
});
