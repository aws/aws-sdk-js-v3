import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext
} from "@aws/types";
import {Logger} from '@aws/logger'

export class LogOperationMiddleware implements Handler<any, any> {
    constructor(
        private readonly next: Handler<any, any>,
        private readonly context: HandlerExecutionContext
     ){};

    handle(args: HandlerArguments<any>): Promise<any> {
        const {input} = args;
        const {model: 
                {
                    input: inputShape,
                    output: outputShape
                },
                logger} = this.context;
        logger.write(Logger.removeSensitiveMember(input, inputShape));
        return this.next.handle(args).then(output => {
            logger.write(Logger.removeSensitiveMember(output, outputShape));
            return Promise.resolve(output)
        });
    }
}
