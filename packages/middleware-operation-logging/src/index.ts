import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    paramsOperation
} from "@aws/types";
import {Logger} from '@aws/logger';

export class LogOperationMiddleware implements Handler<any, any> {
    constructor(
        private readonly next: Handler<any, any>,
        private readonly context: HandlerExecutionContext,
        private readonly paramsOperation: paramsOperation
     ){};

    handle(args: HandlerArguments<any>): Promise<any> {
        const {input} = args;
        const {logger} = this.context;
        const StartTime = Date.now();
        return this.next.handle(args).then(output => {          
            if (logger) {
                const {
                    name: operationName,
                    input: inputShape,
                    output: outputShape,
                    metadata: {
                        serviceFullName
                    }
                } = this.context.model;
                const duration = Date.now() - StartTime;
                logger.log(
`[AWS ${serviceFullName} ${duration/1000}seconds]
${operationName}(
${this.paramsOperation(input, inputShape)},
${this.paramsOperation(output, outputShape)}
)`);
            }
            return output;
        });
    }
}
