import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DisableKeyRotation} from '../model/DisableKeyRotation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DisableKeyRotationInput} from '../types/DisableKeyRotationInput';
import {DisableKeyRotationOutput} from '../types/DisableKeyRotationOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/DisableKeyRotationInput';
export * from '../types/DisableKeyRotationOutput';
export * from '../types/DisableKeyRotationExceptionsUnion';

export class DisableKeyRotationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DisableKeyRotationInput,
    OutputTypesUnion,
    DisableKeyRotationOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DisableKeyRotationInput,
        DisableKeyRotationOutput,
        Blob
    >();

    constructor(readonly input: DisableKeyRotationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<DisableKeyRotationInput, DisableKeyRotationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DisableKeyRotation
        };

        return stack.resolve(
            handler<DisableKeyRotationInput, DisableKeyRotationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}