import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {ListIdentityPools} from '../model/ListIdentityPools';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListIdentityPoolsInput} from '../types/ListIdentityPoolsInput';
import {ListIdentityPoolsOutput} from '../types/ListIdentityPoolsOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class ListIdentityPoolsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListIdentityPoolsInput,
    OutputTypesUnion,
    ListIdentityPoolsOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ListIdentityPoolsInput, ListIdentityPoolsOutput, ReadableStream>();

    constructor(readonly input: ListIdentityPoolsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<ListIdentityPoolsInput, ListIdentityPoolsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListIdentityPools
        };

        return stack.resolve(
            handler<ListIdentityPoolsInput, ListIdentityPoolsOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}