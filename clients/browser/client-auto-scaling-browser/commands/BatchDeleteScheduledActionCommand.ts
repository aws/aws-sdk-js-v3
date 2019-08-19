import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteScheduledAction } from "../model/operations/BatchDeleteScheduledAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteScheduledActionInput } from "../types/BatchDeleteScheduledActionInput";
import { BatchDeleteScheduledActionOutput } from "../types/BatchDeleteScheduledActionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/BatchDeleteScheduledActionInput";
export * from "../types/BatchDeleteScheduledActionOutput";
export * from "../types/BatchDeleteScheduledActionExceptionsUnion";

export class BatchDeleteScheduledActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteScheduledActionInput,
      OutputTypesUnion,
      BatchDeleteScheduledActionOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDeleteScheduledAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteScheduledActionInput,
    BatchDeleteScheduledActionOutput,
    Blob
  >();

  constructor(readonly input: BatchDeleteScheduledActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeleteScheduledActionInput,
    BatchDeleteScheduledActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDeleteScheduledActionInput,
        BatchDeleteScheduledActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
