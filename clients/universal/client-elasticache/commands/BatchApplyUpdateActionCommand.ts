import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchApplyUpdateAction } from "../model/BatchApplyUpdateAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchApplyUpdateActionInput } from "../types/BatchApplyUpdateActionInput";
import { BatchApplyUpdateActionOutput } from "../types/BatchApplyUpdateActionOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/BatchApplyUpdateActionInput";
export * from "../types/BatchApplyUpdateActionOutput";
export * from "../types/BatchApplyUpdateActionExceptionsUnion";

export class BatchApplyUpdateActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchApplyUpdateActionInput,
      OutputTypesUnion,
      BatchApplyUpdateActionOutput,
      ElastiCacheResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchApplyUpdateAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchApplyUpdateActionInput,
    BatchApplyUpdateActionOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchApplyUpdateActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchApplyUpdateActionInput,
    BatchApplyUpdateActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchApplyUpdateActionInput, BatchApplyUpdateActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
