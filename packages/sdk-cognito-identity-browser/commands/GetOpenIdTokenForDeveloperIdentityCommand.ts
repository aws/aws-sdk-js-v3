import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetOpenIdTokenForDeveloperIdentity} from '../model/GetOpenIdTokenForDeveloperIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetOpenIdTokenForDeveloperIdentityInput} from '../types/GetOpenIdTokenForDeveloperIdentityInput';
import {GetOpenIdTokenForDeveloperIdentityOutput} from '../types/GetOpenIdTokenForDeveloperIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class GetOpenIdTokenForDeveloperIdentityCommand implements __aws_types.Command<
    InputTypesUnion,
    GetOpenIdTokenForDeveloperIdentityInput,
    OutputTypesUnion,
    GetOpenIdTokenForDeveloperIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetOpenIdTokenForDeveloperIdentityInput,
        GetOpenIdTokenForDeveloperIdentityOutput,
        ReadableStream
    >();

    constructor(readonly input: GetOpenIdTokenForDeveloperIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetOpenIdTokenForDeveloperIdentity
        };

        return stack.resolve(
            handler<GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}