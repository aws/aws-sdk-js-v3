import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {CreateIdentityPool} from '../model/CreateIdentityPool';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateIdentityPoolInput} from '../types/CreateIdentityPoolInput';
import {CreateIdentityPoolOutput} from '../types/CreateIdentityPoolOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class CreateIdentityPoolCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateIdentityPoolInput,
    OutputTypesUnion,
    CreateIdentityPoolOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateIdentityPoolInput,
        CreateIdentityPoolOutput,
        Blob
    >();

    constructor(readonly input: CreateIdentityPoolInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateIdentityPoolInput, CreateIdentityPoolOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateIdentityPool
        };

        return stack.resolve(
            handler<CreateIdentityPoolInput, CreateIdentityPoolOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}