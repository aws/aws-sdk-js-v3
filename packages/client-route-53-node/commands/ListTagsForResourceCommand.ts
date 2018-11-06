import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTagsForResource} from '../model/ListTagsForResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsForResourceInput} from '../types/ListTagsForResourceInput';
import {ListTagsForResourceOutput} from '../types/ListTagsForResourceOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListTagsForResourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListTagsForResourceInput,
    OutputTypesUnion,
    ListTagsForResourceOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListTagsForResourceInput,
        ListTagsForResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTagsForResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<ListTagsForResourceInput, ListTagsForResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsForResource
        };

        return stack.resolve(
            handler<ListTagsForResourceInput, ListTagsForResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}