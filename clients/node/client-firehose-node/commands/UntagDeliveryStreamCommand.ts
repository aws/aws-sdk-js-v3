import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UntagDeliveryStream } from "../model/operations/UntagDeliveryStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagDeliveryStreamInput } from "../types/UntagDeliveryStreamInput";
import { UntagDeliveryStreamOutput } from "../types/UntagDeliveryStreamOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/UntagDeliveryStreamInput";
export * from "../types/UntagDeliveryStreamOutput";
export * from "../types/UntagDeliveryStreamExceptionsUnion";

export class UntagDeliveryStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagDeliveryStreamInput,
      OutputTypesUnion,
      UntagDeliveryStreamOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UntagDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagDeliveryStreamInput,
    UntagDeliveryStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: UntagDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UntagDeliveryStreamInput,
    UntagDeliveryStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagDeliveryStreamInput, UntagDeliveryStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
