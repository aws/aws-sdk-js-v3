import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTargetGroup } from "../model/operations/DeleteTargetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTargetGroupInput } from "../types/DeleteTargetGroupInput";
import { DeleteTargetGroupOutput } from "../types/DeleteTargetGroupOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DeleteTargetGroupInput";
export * from "../types/DeleteTargetGroupOutput";
export * from "../types/DeleteTargetGroupExceptionsUnion";

export class DeleteTargetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTargetGroupInput,
      OutputTypesUnion,
      DeleteTargetGroupOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTargetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTargetGroupInput,
    DeleteTargetGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteTargetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTargetGroupInput, DeleteTargetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTargetGroupInput, DeleteTargetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
