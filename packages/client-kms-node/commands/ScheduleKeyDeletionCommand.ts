import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ScheduleKeyDeletion} from '../model/ScheduleKeyDeletion';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ScheduleKeyDeletionInput} from '../types/ScheduleKeyDeletionInput';
import {ScheduleKeyDeletionOutput} from '../types/ScheduleKeyDeletionOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/ScheduleKeyDeletionInput';
export * from '../types/ScheduleKeyDeletionOutput';
export * from '../types/ScheduleKeyDeletionExceptionsUnion';

export class ScheduleKeyDeletionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ScheduleKeyDeletionInput,
    OutputTypesUnion,
    ScheduleKeyDeletionOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ScheduleKeyDeletionInput,
        ScheduleKeyDeletionOutput,
        _stream.Readable
    >();

    constructor(readonly input: ScheduleKeyDeletionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<ScheduleKeyDeletionInput, ScheduleKeyDeletionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ScheduleKeyDeletion
        };

        return stack.resolve(
            handler<ScheduleKeyDeletionInput, ScheduleKeyDeletionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}