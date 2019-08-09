import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTagsForDeliveryStream } from "../model/ListTagsForDeliveryStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForDeliveryStreamInput } from "../types/ListTagsForDeliveryStreamInput";
import { ListTagsForDeliveryStreamOutput } from "../types/ListTagsForDeliveryStreamOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/ListTagsForDeliveryStreamInput";
export * from "../types/ListTagsForDeliveryStreamOutput";
export * from "../types/ListTagsForDeliveryStreamExceptionsUnion";

export class ListTagsForDeliveryStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForDeliveryStreamInput,
      OutputTypesUnion,
      ListTagsForDeliveryStreamOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTagsForDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForDeliveryStreamInput,
    ListTagsForDeliveryStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTagsForDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForDeliveryStreamInput,
    ListTagsForDeliveryStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
