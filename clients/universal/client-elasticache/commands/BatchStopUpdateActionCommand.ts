import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchStopUpdateAction } from "../model/BatchStopUpdateAction";
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
      Uint8Array
    > {
  readonly model = BatchStopUpdateAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchStopUpdateActionInput,
    BatchStopUpdateActionOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchStopUpdateActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
