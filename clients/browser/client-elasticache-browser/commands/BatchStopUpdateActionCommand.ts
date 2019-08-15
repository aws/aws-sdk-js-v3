import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchStopUpdateAction } from "../model/operations/BatchStopUpdateAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchStopUpdateActionInput } from "../types/BatchStopUpdateActionInput";
import { BatchStopUpdateActionOutput } from "../types/BatchStopUpdateActionOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/BatchStopUpdateActionInput";
export * from "../types/BatchStopUpdateActionOutput";
export * from "../types/BatchStopUpdateActionExceptionsUnion";

export class BatchStopUpdateActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchStopUpdateActionInput,
      OutputTypesUnion,
      BatchStopUpdateActionOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = BatchStopUpdateAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchStopUpdateActionInput,
    BatchStopUpdateActionOutput,
    Blob
  >();

  constructor(readonly input: BatchStopUpdateActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchStopUpdateActionInput,
    BatchStopUpdateActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchStopUpdateActionInput, BatchStopUpdateActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
