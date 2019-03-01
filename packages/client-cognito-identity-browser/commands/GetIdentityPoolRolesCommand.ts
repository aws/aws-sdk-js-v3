import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetIdentityPoolRoles} from '../model/GetIdentityPoolRoles';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetIdentityPoolRolesInput} from '../types/GetIdentityPoolRolesInput';
import {GetIdentityPoolRolesOutput} from '../types/GetIdentityPoolRolesOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';
export * from '../types/GetIdentityPoolRolesInput';
export * from '../types/GetIdentityPoolRolesOutput';
export * from '../types/GetIdentityPoolRolesExceptionsUnion';

export class GetIdentityPoolRolesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetIdentityPoolRolesInput,
    OutputTypesUnion,
    GetIdentityPoolRolesOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetIdentityPoolRolesInput,
        GetIdentityPoolRolesOutput,
        Blob
    >();

    constructor(readonly input: GetIdentityPoolRolesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_sdk_types.Handler<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetIdentityPoolRoles
        };

        return stack.resolve(
            handler<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}