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
        const {logger} = this.context;
        const StartTime = Date.now();
        return this.next.handle(args).then(output => {
            let requestInfo: {[key: string]: any} = {
                ...this.context.model,
                ...this.context.model.metadata,
                metadata: undefined,
                ...this.context.model.http,
                http: undefined,
                duration: Date.now() - StartTime
            };
            requestInfo.input = JSON.stringify(this.paramsOperation(inputParams, requestInfo.input));
            requestInfo.output = JSON.stringify(this.paramsOperation(output, requestInfo.output));
            logger.log(`[AWS ${requestInfo.serviceFullName} ${requestInfo.name} ${requestInfo.duration}ms]\n${requestInfo.input}\n${requestInfo.output}`);
            return Promise.resolve(output);
        });
    }
}
