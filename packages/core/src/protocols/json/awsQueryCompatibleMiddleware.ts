import {
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  Pluggable,
} from "@smithy/types";

/**
 * @internal
 */
export const awsQueryCompatibleMiddleware =
  (fields: string[]) =>
  (next: InitializeHandler<any, any>, context: HandlerExecutionContext) =>
  async (args: InitializeHandlerArguments<any>) => {
    const { input } = args;
    checkNumericStrings(
      input,
      new Set(fields),
      `${context.clientName}::${context.commandName}`,
      context?.logger?.constructor.name === "NoOpLogger" ? console.warn : context?.logger?.warn ?? console.warn
    );
    return next(args);
  };

/**
 * @internal
 *
 * Converts a set of fields in the input from string to number.
 * This is due to XML protocol not differentiating between number and numeric string,
 * and preserving this indifference when transitioning protocol to
 * JSON w/ awsQueryCompatible trait.
 */
export const checkNumericStrings = (
  input: any,
  fields: Set<string>,
  operation: string,
  logWarn: (msg: string) => void
) => {
  if (typeof input !== "object") {
    return;
  }
  for (const key in input) {
    const value = input[key];

    if (typeof value === "object") {
      checkNumericStrings(value, fields, operation, logWarn);
    } else if (fields.has(key) && typeof value === "string" && Number(value).toString() === String(value)) {
      input[key] = Number(value);
      logWarn(
        `AWS SDK Warning: ${key}="${value}" has been converted to a number automatically in ${operation}. Please correct the input type to number.`
      );
    }
  }
};

/**
 * @internal
 */
export const awsQueryCompatibleMiddlewareOptions: InitializeHandlerOptions = {
  name: "awsQueryCompatibleMiddleware",
  tags: [],
  override: true,
};

/**
 * @internal
 */
export const getAwsQueryCompatiblePlugin = ({
  awsQueryCompatibleNumericFields,
}: {
  awsQueryCompatibleNumericFields: string[];
}): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(awsQueryCompatibleMiddleware(awsQueryCompatibleNumericFields), awsQueryCompatibleMiddlewareOptions);
  },
});
