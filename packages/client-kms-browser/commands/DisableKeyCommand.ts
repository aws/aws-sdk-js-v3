import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DisableKey} from '../model/DisableKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DisableKeyInput} from '../types/DisableKeyInput';
import {DisableKeyOutput} from '../types/DisableKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/DisableKeyInput';
export * from '../types/DisableKeyOutput';
export * from '../types/DisableKeyExceptionsUnion';

export class DisableKeyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DisableKeyInput,
    OutputTypesUnion,
    DisableKeyOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DisableKeyInput,
        DisableKeyOutput,
        Blob
    >();

    constructor(readonly input: DisableKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<DisableKeyInput, DisableKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DisableKey
        };

        return stack.resolve(
            handler<DisableKeyInput, DisableKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}