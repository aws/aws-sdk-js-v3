import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListResourceTags} from '../model/ListResourceTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListResourceTagsInput} from '../types/ListResourceTagsInput';
import {ListResourceTagsOutput} from '../types/ListResourceTagsOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/ListResourceTagsInput';
export * from '../types/ListResourceTagsOutput';
export * from '../types/ListResourceTagsExceptionsUnion';

export class ListResourceTagsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListResourceTagsInput,
    OutputTypesUnion,
    ListResourceTagsOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListResourceTagsInput,
        ListResourceTagsOutput,
        Blob
    >();

    constructor(readonly input: ListResourceTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<ListResourceTagsInput, ListResourceTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListResourceTags
        };

        return stack.resolve(
            handler<ListResourceTagsInput, ListResourceTagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}