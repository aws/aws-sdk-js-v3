import {
  Handler,
  InitializeHandlerArguments,
  MetadataBearer
} from "@aws-sdk/types";
import { removeSensitiveLogs } from "@aws-sdk/remove-sensitive-logs";

export function logOperationInfoMiddleware<
  Input extends object,
  Output extends MetadataBearer
>(next: Handler<Input, Output>, { logger, model }: any) {
  return async (args: InitializeHandlerArguments<Input>): Promise<Output> => {
    const { input } = args;
    const output = await next(args);
    const {
      name: operationName,
      input: inputShape,
      output: outputShape,
      metadata: { serviceFullName }
    } = model;
    logger.log(
      `[${serviceFullName}::${operationName} ${output.$metadata.httpStatusCode}]
Input: ${removeSensitiveLogs(input, inputShape)}
Result: ${removeSensitiveLogs(output, outputShape)}
`
    );
    return output;
  };
}
