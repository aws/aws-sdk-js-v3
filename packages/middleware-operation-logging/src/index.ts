import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Member,
    MetadataBearer
} from "@aws/types";
import {Logger} from '@aws/logger';
import {removeSensitiveLogs} from '@aws/remove-sensitive-logs';

export class LogOperationMiddleware implements Handler<any, any> {
    constructor(
        private readonly next: Handler<any, any>,
        private readonly context: HandlerExecutionContext,
        private readonly paramsOperation: (input: any, shape: Member) => any = removeSensitiveLogs
     ){};

    handle(args: HandlerArguments<any>): Promise<any> {
        const {input: inputParams} = args;
        const {request} = args;
        const {logger} = this.context;
        const StartTime = Date.now();
        return this.next.handle(args).then(output => {          
            if (logger.formatter) {
                const {
                    name: operationName,
                    input: inputShape,
                    output: outputShape,
                    errors: modeledErrors
                } = this.context.model
                const requestInfo: {[key: string]: string|undefined} = {
                    ...this.context.model.http,
                    ...this.context.model.metadata,
                    operationName,
                    input: JSON.stringify(this.paramsOperation(inputParams, inputShape)),
                    output: JSON.stringify(this.paramsOperation(output, outputShape)),
                    modeledErrors: JSON.stringify(modeledErrors)
                }
                logger.log(logger.formatter.format(requestInfo));
            }
            return output;
        });
    }
}
