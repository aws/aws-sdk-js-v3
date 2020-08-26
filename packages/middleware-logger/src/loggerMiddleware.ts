import {
  AbsoluteLocation,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

import { LoggerResolvedConfig } from "./configurations";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loggerMiddleware = (options: LoggerResolvedConfig) => <Output extends MetadataBearer = MetadataBearer>(
  next: FinalizeHandler<any, Output>
): FinalizeHandler<any, Output> => async (
  args: FinalizeHandlerArguments<any>
): Promise<FinalizeHandlerOutput<Output>> => {
  // TODO: use and call options.logger once it's available in context
  return next(args);
};

export const loggerMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "finalizeRequest",
};

export const getLoggerPlugin = (options: LoggerResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(options), loggerMiddlewareOptions);
  },
});
