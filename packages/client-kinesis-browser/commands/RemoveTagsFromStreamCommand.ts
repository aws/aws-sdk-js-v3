import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {RemoveTagsFromStream} from '../model/RemoveTagsFromStream';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {RemoveTagsFromStreamInput} from '../types/RemoveTagsFromStreamInput';
import {RemoveTagsFromStreamOutput} from '../types/RemoveTagsFromStreamOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';

export class RemoveTagsFromStreamCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    RemoveTagsFromStreamInput,
    OutputTypesUnion,
    RemoveTagsFromStreamOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        RemoveTagsFromStreamInput,
        RemoveTagsFromStreamOutput,
        Blob
    >();

    constructor(readonly input: RemoveTagsFromStreamInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<RemoveTagsFromStreamInput, RemoveTagsFromStreamOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: RemoveTagsFromStream
        };

        return stack.resolve(
            handler<RemoveTagsFromStreamInput, RemoveTagsFromStreamOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}