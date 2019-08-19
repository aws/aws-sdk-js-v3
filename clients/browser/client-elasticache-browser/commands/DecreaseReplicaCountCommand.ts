import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DecreaseReplicaCount } from "../model/operations/DecreaseReplicaCount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DecreaseReplicaCountInput } from "../types/DecreaseReplicaCountInput";
import { DecreaseReplicaCountOutput } from "../types/DecreaseReplicaCountOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DecreaseReplicaCountInput";
export * from "../types/DecreaseReplicaCountOutput";
export * from "../types/DecreaseReplicaCountExceptionsUnion";

export class DecreaseReplicaCountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DecreaseReplicaCountInput,
      OutputTypesUnion,
      DecreaseReplicaCountOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DecreaseReplicaCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DecreaseReplicaCountInput,
    DecreaseReplicaCountOutput,
    Blob
  >();

  constructor(readonly input: DecreaseReplicaCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DecreaseReplicaCountInput,
    DecreaseReplicaCountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DecreaseReplicaCountInput, DecreaseReplicaCountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
