import {
  AbsoluteLocation,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

import { LoggerResolvedConfig } from "./configurations";

export const loggerMiddleware = () => <Output extends MetadataBearer = MetadataBearer>(
  next: FinalizeHandler<any, Output>,
  context: HandlerExecutionContext
): FinalizeHandler<any, Output> => async (
  args: FinalizeHandlerArguments<any>
): Promise<FinalizeHandlerOutput<Output>> => {
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

export const loggerMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "finalizeRequest",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLoggerPlugin = (options: LoggerResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  },
});
