import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    MetadataBearer,
} from "@aws/types";
import {removeSensitiveLogs} from '@aws/remove-sensitive-logs';

export function  logOperationInfoMiddleware<
    Input extends object,
    Output extends MetadataBearer,
    Stream
>(
    next: Handler<Input, Output, Stream>,
    {logger, model}: HandlerExecutionContext
) {
    return (args: HandlerArguments<Input, Stream>): Promise<Output> => {
        const {input} = args;
        return next(args).then(output => {
            const {
                name: operationName,
                input: inputShape,
                output: outputShape,
                metadata: {
                    serviceFullName
                }
            } = model;
            logger.log(
`[${serviceFullName}::${operationName} ${output.$metadata.httpResponse.statusCode}]
Input: ${removeSensitiveLogs(input, inputShape)}
Result: ${removeSensitiveLogs(output, outputShape)}
`
            );
            return output;
        });
    }
}
