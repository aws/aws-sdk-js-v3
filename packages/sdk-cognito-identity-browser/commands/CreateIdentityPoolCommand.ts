import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {CreateIdentityPool} from '../model/CreateIdentityPool';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateIdentityPoolInput} from '../types/CreateIdentityPoolInput';
import {CreateIdentityPoolOutput} from '../types/CreateIdentityPoolOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class CreateIdentityPoolCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateIdentityPoolInput,
    OutputTypesUnion,
    CreateIdentityPoolOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateIdentityPoolInput,
        CreateIdentityPoolOutput,
        ReadableStream
    >();

    constructor(readonly input: CreateIdentityPoolInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<CreateIdentityPoolInput, CreateIdentityPoolOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateIdentityPool
        };

        return stack.resolve(
            handler<CreateIdentityPoolInput, CreateIdentityPoolOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}