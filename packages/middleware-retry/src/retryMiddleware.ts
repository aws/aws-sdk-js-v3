import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { isServerError, isThrottlingError, isTransientError } from "@aws-sdk/service-error-classification";
import {
  AbsoluteLocation,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
  RetryErrorInfo,
  RetryErrorType,
  RetryStrategy,
  RetryStrategyV2,
  RetryToken,
  SdkError,
} from "@aws-sdk/types";
import { INVOCATION_ID_HEADER, REQUEST_HEADER } from "@aws-sdk/util-retry";
import { v4 } from "uuid";

import { RetryResolvedConfig } from "./configurations";
import { asSdkError } from "./util";

export const retryMiddleware =
  (options: RetryResolvedConfig) =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output>,
    context: HandlerExecutionContext
  ): FinalizeHandler<any, Output> =>
  async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();

    if (isRetryStrategyV2(retryStrategy)) {
      retryStrategy = retryStrategy as RetryStrategyV2;
      let retryToken: RetryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
      let lastError: SdkError = new Error();
      let attempts = 0;
      let totalRetryDelay = 0;
      const { request } = args;
      if (HttpRequest.isInstance(request)) {
        request.headers[INVOCATION_ID_HEADER] = v4();
      }
      while (true) {
        try {
          if (HttpRequest.isInstance(request)) {
            request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
          }
          const { response, output } = await next(args);
          retryStrategy.recordSuccess(retryToken);
          output.$metadata.attempts = attempts + 1;
          output.$metadata.totalRetryDelay = totalRetryDelay;
          return { response, output };
        } catch (e) {
          const retryErrorInfo = getRetyErrorInto(e);
          lastError = asSdkError(e);
          try {
            retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
          } catch (refreshError) {
            if (!lastError.$metadata) {
              lastError.$metadata = {};
            }
            lastError.$metadata.attempts = attempts + 1;
            lastError.$metadata.totalRetryDelay = totalRetryDelay;
            throw lastError;
          }
          attempts = retryToken.getRetryCount();
          const delay = retryToken.getRetryDelay();
          totalRetryDelay += delay;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    } else {
      retryStrategy = retryStrategy as RetryStrategy;
      if (retryStrategy?.mode)
        context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];

      return retryStrategy.retry(next, args);
    }
  };

const isRetryStrategyV2 = (retryStrategy: RetryStrategy | RetryStrategyV2) =>
  typeof (retryStrategy as RetryStrategyV2).acquireInitialRetryToken !== "undefined" &&
  typeof (retryStrategy as RetryStrategyV2).refreshRetryTokenForRetry !== "undefined" &&
  typeof (retryStrategy as RetryStrategyV2).recordSuccess !== "undefined";

const getRetyErrorInto = (error: SdkError): RetryErrorInfo => {
  const errorInfo: RetryErrorInfo = {
    errorType: getRetryErrorType(error),
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
};

const getRetryErrorType = (error: SdkError): RetryErrorType => {
  if (isThrottlingError(error)) return "THROTTLING";
  if (isTransientError(error)) return "TRANSIENT";
  if (isServerError(error)) return "SERVER_ERROR";
  return "CLIENT_ERROR";
};

export const retryMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true,
};

export const getRetryPlugin = (options: RetryResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  },
});

export const getRetryAfterHint = (response: unknown): Date | undefined => {
  if (!HttpResponse.isInstance(response)) return;

  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName) return;
  const retryAfter = response.headers[retryAfterHeaderName];

  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds)) return new Date(retryAfterSeconds * 1000);

  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
};
