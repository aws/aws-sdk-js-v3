import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {CancelKeyDeletion} from '../model/CancelKeyDeletion';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CancelKeyDeletionInput} from '../types/CancelKeyDeletionInput';
import {CancelKeyDeletionOutput} from '../types/CancelKeyDeletionOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/CancelKeyDeletionInput';
export * from '../types/CancelKeyDeletionOutput';
export * from '../types/CancelKeyDeletionExceptionsUnion';

export class CancelKeyDeletionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CancelKeyDeletionInput,
    OutputTypesUnion,
    CancelKeyDeletionOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CancelKeyDeletionInput,
        CancelKeyDeletionOutput,
        Blob
    >();

    constructor(readonly input: CancelKeyDeletionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<CancelKeyDeletionInput, CancelKeyDeletionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CancelKeyDeletion
        };

        return stack.resolve(
            handler<CancelKeyDeletionInput, CancelKeyDeletionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}