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
  const { logger } = context;

  const response = await next(args);

  if (!logger) {
    return response;
  }

  const {
    output: { $metadata },
  } = response;

  // TODO: Populate custom metadata in https://github.com/aws/aws-sdk-js-v3/issues/1491#issuecomment-692174256
  // $metadata will be removed in https://github.com/aws/aws-sdk-js-v3/issues/1490
  if (typeof logger.info === "function") {
    logger.info({
      $metadata,
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
