import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeliveryStream } from "../model/CreateDeliveryStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeliveryStreamInput } from "../types/CreateDeliveryStreamInput";
import { CreateDeliveryStreamOutput } from "../types/CreateDeliveryStreamOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/CreateDeliveryStreamInput";
export * from "../types/CreateDeliveryStreamOutput";
export * from "../types/CreateDeliveryStreamExceptionsUnion";

export class CreateDeliveryStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeliveryStreamInput,
      OutputTypesUnion,
      CreateDeliveryStreamOutput,
      FirehoseResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeliveryStreamInput,
    CreateDeliveryStreamOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeliveryStreamInput,
    CreateDeliveryStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeliveryStreamInput, CreateDeliveryStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
