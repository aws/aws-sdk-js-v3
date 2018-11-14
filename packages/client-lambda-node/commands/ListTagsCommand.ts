import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTags} from '../model/ListTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsInput} from '../types/ListTagsInput';
import {ListTagsOutput} from '../types/ListTagsOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class ListTagsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListTagsInput,
    OutputTypesUnion,
    ListTagsOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListTagsInput,
        ListTagsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<ListTagsInput, ListTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTags
        };

        return stack.resolve(
            handler<ListTagsInput, ListTagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}