import { HttpResponse } from "@aws-sdk/protocol-http";
import {
  AbsoluteLocation,
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

export const loggerMiddleware = () => <Output extends MetadataBearer = MetadataBearer>(
  next: InitializeHandler<any, Output>,
  context: HandlerExecutionContext
): InitializeHandler<any, Output> => async (
  args: InitializeHandlerArguments<any>
): Promise<InitializeHandlerOutput<Output>> => {
  const { logger } = context;

  const response = await next(args);

  if (!logger) {
    return response;
  }

  const httpResponse = response.response as HttpResponse;

  if (typeof logger.info === "function") {
    logger.info({
      metadata: {
        statusCode: httpResponse.statusCode,
        requestId: httpResponse.headers["x-amzn-requestid"] ?? httpResponse.headers["x-amzn-request-id"],
        extendedRequestId: httpResponse.headers["x-amz-id-2"],
        cfId: httpResponse.headers["x-amz-cf-id"],
      },
    });
  }

  return response;
};

export const loggerMiddlewareOptions: InitializeHandlerOptions & AbsoluteLocation = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLoggerPlugin = (options: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  },
});
