import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListTagsForStream} from '../model/ListTagsForStream';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsForStreamInput} from '../types/ListTagsForStreamInput';
import {ListTagsForStreamOutput} from '../types/ListTagsForStreamOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';
export * from '../types/ListTagsForStreamInput';
export * from '../types/ListTagsForStreamOutput';
export * from '../types/ListTagsForStreamExceptionsUnion';

export class ListTagsForStreamCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListTagsForStreamInput,
    OutputTypesUnion,
    ListTagsForStreamOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListTagsForStreamInput,
        ListTagsForStreamOutput,
        Blob
    >();

    constructor(readonly input: ListTagsForStreamInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<ListTagsForStreamInput, ListTagsForStreamOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsForStream
        };

        return stack.resolve(
            handler<ListTagsForStreamInput, ListTagsForStreamOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}