import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {SetIdentityPoolRoles} from '../model/SetIdentityPoolRoles';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SetIdentityPoolRolesInput} from '../types/SetIdentityPoolRolesInput';
import {SetIdentityPoolRolesOutput} from '../types/SetIdentityPoolRolesOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class SetIdentityPoolRolesCommand implements __aws_types.Command<
    InputTypesUnion,
    SetIdentityPoolRolesInput,
    OutputTypesUnion,
    SetIdentityPoolRolesOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput, ReadableStream>();

    constructor(readonly input: SetIdentityPoolRolesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SetIdentityPoolRoles
        };

        return stack.resolve(
            handler<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}