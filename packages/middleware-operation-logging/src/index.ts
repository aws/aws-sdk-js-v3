import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    MetadataBearer,
    SensitiveDataScrubber
} from "@aws/types";
import {Logger} from '@aws/logger';

export class logOperationInfoMiddleware implements Handler<any, any> {
    constructor(
        private readonly SensitiveDataScrubber: SensitiveDataScrubber,
        private readonly next: Handler<any, any>,
        private readonly context: HandlerExecutionContext
    ){};

    handle(args: HandlerArguments<any>): Promise<any> {
        const {input} = args;
        const {logger} = this.context;
        const startTime = Date.now();
        return this.next.handle(args).then(output => {
            let statusCode = ' ';
            if (output.$metadata) {
                statusCode = ` ${(output as MetadataBearer).$metadata.httpResponse.statusCode} `
            }             
            const {
                name: operationName,
                input: inputShape,
                output: outputShape,
                metadata: {
                    serviceFullName
                }
            } = this.context.model;
            const duration = Date.now() - startTime;
            logger.log(
`[AWS ${serviceFullName}${statusCode}${duration/1000}seconds]
${operationName}(
${this.SensitiveDataScrubber(input, inputShape)},
${this.SensitiveDataScrubber(output, outputShape)}
)`
            );
            return output;
        });
    }
}
