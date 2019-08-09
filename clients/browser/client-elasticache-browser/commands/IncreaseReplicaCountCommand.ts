import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { IncreaseReplicaCount } from "../model/IncreaseReplicaCount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IncreaseReplicaCountInput } from "../types/IncreaseReplicaCountInput";
import { IncreaseReplicaCountOutput } from "../types/IncreaseReplicaCountOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/IncreaseReplicaCountInput";
export * from "../types/IncreaseReplicaCountOutput";
export * from "../types/IncreaseReplicaCountExceptionsUnion";

export class IncreaseReplicaCountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IncreaseReplicaCountInput,
      OutputTypesUnion,
      IncreaseReplicaCountOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = IncreaseReplicaCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IncreaseReplicaCountInput,
    IncreaseReplicaCountOutput,
    Blob
  >();

  constructor(readonly input: IncreaseReplicaCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    IncreaseReplicaCountInput,
    IncreaseReplicaCountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<IncreaseReplicaCountInput, IncreaseReplicaCountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
