import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeliveryStreams } from "../model/operations/ListDeliveryStreams";
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
      Blob
    > {
  readonly model = ListDeliveryStreams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeliveryStreamsInput,
    ListDeliveryStreamsOutput,
    Blob
  >();

  constructor(readonly input: ListDeliveryStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
