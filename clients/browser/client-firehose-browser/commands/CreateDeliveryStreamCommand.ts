import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeliveryStream } from "../model/operations/CreateDeliveryStream";
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
      Blob
    > {
  readonly model = CreateDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeliveryStreamInput,
    CreateDeliveryStreamOutput,
    Blob
  >();

  constructor(readonly input: CreateDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
