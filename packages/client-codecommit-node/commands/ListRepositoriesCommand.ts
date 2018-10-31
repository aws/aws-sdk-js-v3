import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListRepositories} from '../model/ListRepositories';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListRepositoriesInput} from '../types/ListRepositoriesInput';
import {ListRepositoriesOutput} from '../types/ListRepositoriesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class ListRepositoriesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListRepositoriesInput,
    OutputTypesUnion,
    ListRepositoriesOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListRepositoriesInput,
        ListRepositoriesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListRepositoriesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<ListRepositoriesInput, ListRepositoriesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListRepositories
        };

        return stack.resolve(
            handler<ListRepositoriesInput, ListRepositoriesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}