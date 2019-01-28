import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ChangeMessageVisibilityBatch} from '../model/ChangeMessageVisibilityBatch';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ChangeMessageVisibilityBatchInput} from '../types/ChangeMessageVisibilityBatchInput';
import {ChangeMessageVisibilityBatchOutput} from '../types/ChangeMessageVisibilityBatchOutput';
import {SQSResolvedConfiguration} from '../SQSConfiguration';
export * from '../types/ChangeMessageVisibilityBatchInput';
export * from '../types/ChangeMessageVisibilityBatchOutput';
export * from '../types/ChangeMessageVisibilityBatchExceptionsUnion';

export class ChangeMessageVisibilityBatchCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ChangeMessageVisibilityBatchInput,
    OutputTypesUnion,
    ChangeMessageVisibilityBatchOutput,
    SQSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ChangeMessageVisibilityBatchInput,
        ChangeMessageVisibilityBatchOutput,
        _stream.Readable
    >();

    constructor(readonly input: ChangeMessageVisibilityBatchInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: SQSResolvedConfiguration
    ): __aws_sdk_types.Handler<ChangeMessageVisibilityBatchInput, ChangeMessageVisibilityBatchOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ChangeMessageVisibilityBatch
        };

        return stack.resolve(
            handler<ChangeMessageVisibilityBatchInput, ChangeMessageVisibilityBatchOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}