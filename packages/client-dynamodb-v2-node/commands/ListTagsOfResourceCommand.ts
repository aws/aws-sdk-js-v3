import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTagsOfResource} from '../model/ListTagsOfResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsOfResourceInput} from '../types/ListTagsOfResourceInput';
import {ListTagsOfResourceOutput} from '../types/ListTagsOfResourceOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class ListTagsOfResourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListTagsOfResourceInput,
    OutputTypesUnion,
    ListTagsOfResourceOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListTagsOfResourceInput,
        ListTagsOfResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTagsOfResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<ListTagsOfResourceInput, ListTagsOfResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsOfResource
        };

        return stack.resolve(
            handler<ListTagsOfResourceInput, ListTagsOfResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}