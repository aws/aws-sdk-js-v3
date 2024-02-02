import {
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
  MiddlewareStack,
  Pluggable,
} from "@aws-sdk/types";

interface QueueUrlMiddlewareConfig {
  clientEndpoint: string; // The default endpoint of the SQS client
}

export function queueUrlMiddleware(options: QueueUrlMiddlewareConfig) {
  return <Output extends object>(
    next: (args: FinalizeHandlerArguments<any>) => Promise<FinalizeHandlerOutput<Output>>,
    context: HandlerExecutionContext
  ): ((args: FinalizeHandlerArguments<any>) => Promise<FinalizeHandlerOutput<Output>>) => {
    return async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
      const { input } = args;
      if (input.QueueUrl) {
        // Override the client endpoint with the QueueUrl from the input
        context.endpoint = () => Promise.resolve(new URL(input.QueueUrl));
      } else {
        // Use the default client endpoint
        context.endpoint = () => Promise.resolve(new URL(options.clientEndpoint));
      }
      return next(args);
    };
  };
}

export const getQueueUrlPlugin = (config: QueueUrlMiddlewareConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack: MiddlewareStack<any, any>) => {
    clientStack.addRelativeTo(queueUrlMiddleware(config), {
      name: "queueUrlMiddleware",
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: true,
    });
  },
});
