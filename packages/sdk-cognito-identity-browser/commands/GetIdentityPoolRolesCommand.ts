import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetIdentityPoolRoles} from '../model/GetIdentityPoolRoles';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetIdentityPoolRolesInput} from '../types/GetIdentityPoolRolesInput';
import {GetIdentityPoolRolesOutput} from '../types/GetIdentityPoolRolesOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class GetIdentityPoolRolesCommand implements __aws_types.Command<
    InputTypesUnion,
    GetIdentityPoolRolesInput,
    OutputTypesUnion,
    GetIdentityPoolRolesOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput, ReadableStream>();

    constructor(readonly input: GetIdentityPoolRolesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetIdentityPoolRoles
        };

        return stack.resolve(
            handler<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}