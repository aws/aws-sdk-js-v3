import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLoadBalancer } from "../model/DeleteLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoadBalancerInput } from "../types/DeleteLoadBalancerInput";
import { DeleteLoadBalancerOutput } from "../types/DeleteLoadBalancerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DeleteLoadBalancerInput";
export * from "../types/DeleteLoadBalancerOutput";
export * from "../types/DeleteLoadBalancerExceptionsUnion";

export class DeleteLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoadBalancerInput,
      OutputTypesUnion,
      DeleteLoadBalancerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoadBalancerInput,
    DeleteLoadBalancerOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoadBalancerInput,
    DeleteLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLoadBalancerInput, DeleteLoadBalancerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
