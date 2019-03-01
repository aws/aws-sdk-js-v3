import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {PutRecords} from '../model/PutRecords';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutRecordsInput} from '../types/PutRecordsInput';
import {PutRecordsOutput} from '../types/PutRecordsOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';
export * from '../types/PutRecordsInput';
export * from '../types/PutRecordsOutput';
export * from '../types/PutRecordsExceptionsUnion';

export class PutRecordsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutRecordsInput,
    OutputTypesUnion,
    PutRecordsOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutRecordsInput,
        PutRecordsOutput,
        Blob
    >();

    constructor(readonly input: PutRecordsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<PutRecordsInput, PutRecordsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutRecords
        };

        return stack.resolve(
            handler<PutRecordsInput, PutRecordsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}