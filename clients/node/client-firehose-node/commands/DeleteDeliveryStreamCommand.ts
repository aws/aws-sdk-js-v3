import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDeliveryStream } from "../model/DeleteDeliveryStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeliveryStreamInput } from "../types/DeleteDeliveryStreamInput";
import { DeleteDeliveryStreamOutput } from "../types/DeleteDeliveryStreamOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/DeleteDeliveryStreamInput";
export * from "../types/DeleteDeliveryStreamOutput";
export * from "../types/DeleteDeliveryStreamExceptionsUnion";

export class DeleteDeliveryStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeliveryStreamInput,
      OutputTypesUnion,
      DeleteDeliveryStreamOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeliveryStreamInput,
    DeleteDeliveryStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeliveryStreamInput,
    DeleteDeliveryStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeliveryStreamInput, DeleteDeliveryStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
