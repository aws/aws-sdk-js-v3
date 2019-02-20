import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetCredentialsForIdentity} from '../model/GetCredentialsForIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCredentialsForIdentityInput} from '../types/GetCredentialsForIdentityInput';
import {GetCredentialsForIdentityOutput} from '../types/GetCredentialsForIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';
export * from '../types/GetCredentialsForIdentityInput';
export * from '../types/GetCredentialsForIdentityOutput';
export * from '../types/GetCredentialsForIdentityExceptionsUnion';

export class GetCredentialsForIdentityCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetCredentialsForIdentityInput,
    OutputTypesUnion,
    GetCredentialsForIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetCredentialsForIdentityInput,
        GetCredentialsForIdentityOutput,
        Blob
    >();

    constructor(readonly input: GetCredentialsForIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_sdk_types.Handler<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCredentialsForIdentity
        };

        return stack.resolve(
            handler<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}