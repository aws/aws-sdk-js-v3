import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

/**
 * @internal
 *
 * Log a warning if the input to PutObject is detected to be a Stream of unknown ContentLength and
 * recommend the usage of the @aws-sdk/lib-storage Upload class.
 */
export function checkUploadBodyMiddleware(): FinalizeRequestMiddleware<any, any> {
  return <Output extends MetadataBearer>(
      next: FinalizeHandler<any, Output>,
      context: HandlerExecutionContext
    ): FinalizeHandler<any, Output> =>
    async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
      const { input } = args;
      const Body = input?.Body;

      if (
        Body &&
        typeof Body.read === "function" &&
        typeof Body.emit === "function" &&
        (input.ContentLength === null || isNaN(input.ContentLength))
      ) {
        const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
        if (typeof context?.logger?.warn === "function") {
          context.logger.warn(message);
        } else {
          console.warn(message);
        }
      }
      return next({ ...args });
    };
}

/**
 * @internal
 */
export const checkUploadBodyMiddlewareOptions: FinalizeRequestHandlerOptions = {
  step: "finalizeRequest",
  tags: ["CHECK_UPLOAD_BODY"],
  name: "checkUploadBodyMiddleware",
  override: true,
};

/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCheckUploadBodyPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(checkUploadBodyMiddleware(), checkUploadBodyMiddlewareOptions);
  },
});
