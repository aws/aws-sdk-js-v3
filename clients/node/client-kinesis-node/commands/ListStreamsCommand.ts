import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListStreams } from "../model/operations/ListStreams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStreamsInput } from "../types/ListStreamsInput";
import { ListStreamsOutput } from "../types/ListStreamsOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/ListStreamsInput";
export * from "../types/ListStreamsOutput";
export * from "../types/ListStreamsExceptionsUnion";

export class ListStreamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStreamsInput,
      OutputTypesUnion,
      ListStreamsOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListStreams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStreamsInput,
    ListStreamsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<ListStreamsInput, ListStreamsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStreamsInput, ListStreamsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
