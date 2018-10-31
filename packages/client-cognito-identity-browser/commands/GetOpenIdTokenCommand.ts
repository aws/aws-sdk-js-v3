import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetOpenIdToken} from '../model/GetOpenIdToken';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetOpenIdTokenInput} from '../types/GetOpenIdTokenInput';
import {GetOpenIdTokenOutput} from '../types/GetOpenIdTokenOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class GetOpenIdTokenCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetOpenIdTokenInput,
    OutputTypesUnion,
    GetOpenIdTokenOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetOpenIdTokenInput,
        GetOpenIdTokenOutput,
        Blob
    >();

    constructor(readonly input: GetOpenIdTokenInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_sdk_types.Handler<GetOpenIdTokenInput, GetOpenIdTokenOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetOpenIdToken
        };

        return stack.resolve(
            handler<GetOpenIdTokenInput, GetOpenIdTokenOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}