import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchPutMessage } from "../model/BatchPutMessage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchPutMessageInput } from "../types/BatchPutMessageInput";
import { BatchPutMessageOutput } from "../types/BatchPutMessageOutput";
import { IoTEventsDataResolvedConfiguration } from "../IoTEventsDataConfiguration";
export * from "../types/BatchPutMessageInput";
export * from "../types/BatchPutMessageOutput";
export * from "../types/BatchPutMessageExceptionsUnion";

export class BatchPutMessageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchPutMessageInput,
      OutputTypesUnion,
      BatchPutMessageOutput,
      IoTEventsDataResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchPutMessage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchPutMessageInput,
    BatchPutMessageOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchPutMessageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTEventsDataResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchPutMessageInput, BatchPutMessageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchPutMessageInput, BatchPutMessageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
