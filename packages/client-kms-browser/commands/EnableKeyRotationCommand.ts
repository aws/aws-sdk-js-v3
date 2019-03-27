import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {EnableKeyRotation} from '../model/EnableKeyRotation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {EnableKeyRotationInput} from '../types/EnableKeyRotationInput';
import {EnableKeyRotationOutput} from '../types/EnableKeyRotationOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/EnableKeyRotationInput';
export * from '../types/EnableKeyRotationOutput';
export * from '../types/EnableKeyRotationExceptionsUnion';

export class EnableKeyRotationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    EnableKeyRotationInput,
    OutputTypesUnion,
    EnableKeyRotationOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        EnableKeyRotationInput,
        EnableKeyRotationOutput,
        Blob
    >();

    constructor(readonly input: EnableKeyRotationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<EnableKeyRotationInput, EnableKeyRotationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: EnableKeyRotation
        };

        return stack.resolve(
            handler<EnableKeyRotationInput, EnableKeyRotationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}