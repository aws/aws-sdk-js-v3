import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {SetIdentityPoolRoles} from '../model/SetIdentityPoolRoles';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SetIdentityPoolRolesInput} from '../types/SetIdentityPoolRolesInput';
import {SetIdentityPoolRolesOutput} from '../types/SetIdentityPoolRolesOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';
export * from '../types/SetIdentityPoolRolesInput';
export * from '../types/SetIdentityPoolRolesOutput';
export * from '../types/SetIdentityPoolRolesExceptionsUnion';

export class SetIdentityPoolRolesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    SetIdentityPoolRolesInput,
    OutputTypesUnion,
    SetIdentityPoolRolesOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        SetIdentityPoolRolesInput,
        SetIdentityPoolRolesOutput,
        Blob
    >();

    constructor(readonly input: SetIdentityPoolRolesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_sdk_types.Handler<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SetIdentityPoolRoles
        };

        return stack.resolve(
            handler<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}