import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {UpdateIdentityPool} from '../model/UpdateIdentityPool';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateIdentityPoolInput} from '../types/UpdateIdentityPoolInput';
import {UpdateIdentityPoolOutput} from '../types/UpdateIdentityPoolOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class UpdateIdentityPoolCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateIdentityPoolInput,
    OutputTypesUnion,
    UpdateIdentityPoolOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateIdentityPoolInput,
        UpdateIdentityPoolOutput,
        Blob
    >();

    constructor(readonly input: UpdateIdentityPoolInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<UpdateIdentityPoolInput, UpdateIdentityPoolOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateIdentityPool
        };

        return stack.resolve(
            handler<UpdateIdentityPoolInput, UpdateIdentityPoolOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}