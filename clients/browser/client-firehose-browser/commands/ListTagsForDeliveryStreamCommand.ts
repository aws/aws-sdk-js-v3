import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Blob
    > {
  readonly model = ListTagsForDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForDeliveryStreamInput,
    ListTagsForDeliveryStreamOutput,
    Blob
  >();

  constructor(readonly input: ListTagsForDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
