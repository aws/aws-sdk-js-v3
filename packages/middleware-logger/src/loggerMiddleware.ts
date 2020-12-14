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
  const { clientName, commandName, inputFilterSensitiveLog, logger, outputFilterSensitiveLog } = context;

  const response = await next(args);

  if (!logger) {
    return response;
  }

  if (typeof logger.info === "function") {
    const httpResponse = response.response as HttpResponse;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger.info({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      retry: {
        attempts: $metadata.attempts,
        totalDelay: $metadata.totalRetryDelay,
      },
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
