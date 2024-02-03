import {
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
  MiddlewareStack,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";
import { NoOpLogger } from "@smithy/smithy-client";

/**
 * @public
 */
export interface QueueUrlInputConfig {
  /**
   * In cases where a QueueUrl is given as input, that
   * will be preferred as the request endpoint.
   *
   * Set this value to false to ignore the QueueUrl and use the
   * client's resolved endpoint, which may be a custom endpoint.
   */
  useQueueUrlAsEndpoint?: boolean;
}

export interface QueueUrlResolvedConfig {
  useQueueUrlAsEndpoint: boolean;
}

export interface PreviouslyResolved {}

export const resolveQueueUrlConfig = <T>(
  config: T & PreviouslyResolved & QueueUrlInputConfig
): T & QueueUrlResolvedConfig => {
  return {
    ...config,
    useQueueUrlAsEndpoint: config.useQueueUrlAsEndpoint ?? true,
  };
};

/**
 * @internal
 */
export function queueUrlMiddleware({ useQueueUrlAsEndpoint }: QueueUrlResolvedConfig) {
  return <Output extends object>(
    next: (args: FinalizeHandlerArguments<any>) => Promise<FinalizeHandlerOutput<Output>>,
    context: HandlerExecutionContext
  ): ((args: FinalizeHandlerArguments<any>) => Promise<FinalizeHandlerOutput<Output>>) => {
    return async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
      const { input } = args;
      const resolvedEndpoint = context.endpointV2;

      if (input.QueueUrl && resolvedEndpoint && useQueueUrlAsEndpoint) {
        const logger = context.logger instanceof NoOpLogger || !context.logger?.warn ? console : context.logger;
        try {
          const queueUrl: URL = new URL(input.QueueUrl);
          const queueUrlOrigin: URL = new URL(queueUrl.origin);
          if (resolvedEndpoint.url.origin !== queueUrlOrigin.origin) {
            logger.warn(
              `QueueUrl=${
                input.QueueUrl
              } differs from SQSClient resolved endpoint=${resolvedEndpoint.url.toString()}, using QueueUrl host as endpoint.
Set [endpoint=string] or [useQueueUrlAsEndpoint=false] on the SQSClient.`
            );
            resolvedEndpoint.url = queueUrlOrigin;
          }
        } catch (e: unknown) {
          logger.warn(`Failed to parse QueueUrl: ${input.QueueUrl}.`);
        }
      }
      return next(args);
    };
  };
}

/**
 * @internal
 */
export const queueUrlMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "queueUrlMiddleware",
  relation: "after",
  toMiddleware: "endpointV2Middleware",
  override: true,
};

/**
 * @internal
 */
export const getQueueUrlPlugin = (config: QueueUrlResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack: MiddlewareStack<any, any>) => {
    clientStack.addRelativeTo(queueUrlMiddleware(config), queueUrlMiddlewareOptions);
  },
});
