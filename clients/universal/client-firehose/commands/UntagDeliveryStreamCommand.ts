import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagDeliveryStream } from "../model/UntagDeliveryStream";
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
      Uint8Array
    > {
  readonly model = UntagDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagDeliveryStreamInput,
    UntagDeliveryStreamOutput,
    Uint8Array
  >();

  constructor(readonly input: UntagDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
