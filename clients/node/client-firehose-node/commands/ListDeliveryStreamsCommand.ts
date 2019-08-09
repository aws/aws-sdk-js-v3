import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeliveryStreams } from "../model/ListDeliveryStreams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeliveryStreamsInput } from "../types/ListDeliveryStreamsInput";
import { ListDeliveryStreamsOutput } from "../types/ListDeliveryStreamsOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/ListDeliveryStreamsInput";
export * from "../types/ListDeliveryStreamsOutput";
export * from "../types/ListDeliveryStreamsExceptionsUnion";

export class ListDeliveryStreamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeliveryStreamsInput,
      OutputTypesUnion,
      ListDeliveryStreamsOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeliveryStreams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeliveryStreamsInput,
    ListDeliveryStreamsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeliveryStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeliveryStreamsInput,
    ListDeliveryStreamsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeliveryStreamsInput, ListDeliveryStreamsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
