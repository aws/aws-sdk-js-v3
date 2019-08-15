import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TagDeliveryStream } from "../model/operations/TagDeliveryStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagDeliveryStreamInput } from "../types/TagDeliveryStreamInput";
import { TagDeliveryStreamOutput } from "../types/TagDeliveryStreamOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/TagDeliveryStreamInput";
export * from "../types/TagDeliveryStreamOutput";
export * from "../types/TagDeliveryStreamExceptionsUnion";

export class TagDeliveryStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagDeliveryStreamInput,
      OutputTypesUnion,
      TagDeliveryStreamOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TagDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagDeliveryStreamInput,
    TagDeliveryStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: TagDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<TagDeliveryStreamInput, TagDeliveryStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagDeliveryStreamInput, TagDeliveryStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
