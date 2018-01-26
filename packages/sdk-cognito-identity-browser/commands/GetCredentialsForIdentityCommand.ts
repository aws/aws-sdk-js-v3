import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetCredentialsForIdentity} from '../model/GetCredentialsForIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCredentialsForIdentityInput} from '../types/GetCredentialsForIdentityInput';
import {GetCredentialsForIdentityOutput} from '../types/GetCredentialsForIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class GetCredentialsForIdentityCommand implements __aws_types.Command<
    InputTypesUnion,
    GetCredentialsForIdentityInput,
    OutputTypesUnion,
    GetCredentialsForIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput, ReadableStream>();

    constructor(readonly input: GetCredentialsForIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCredentialsForIdentity
        };

        return stack.resolve(
            handler<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}