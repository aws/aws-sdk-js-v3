import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListStreams} from '../model/ListStreams';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListStreamsInput} from '../types/ListStreamsInput';
import {ListStreamsOutput} from '../types/ListStreamsOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';
export * from '../types/ListStreamsInput';
export * from '../types/ListStreamsOutput';
export * from '../types/ListStreamsExceptionsUnion';

export class ListStreamsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListStreamsInput,
    OutputTypesUnion,
    ListStreamsOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListStreamsInput,
        ListStreamsOutput,
        Blob
    >();

    constructor(readonly input: ListStreamsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<ListStreamsInput, ListStreamsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListStreams
        };

        return stack.resolve(
            handler<ListStreamsInput, ListStreamsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}