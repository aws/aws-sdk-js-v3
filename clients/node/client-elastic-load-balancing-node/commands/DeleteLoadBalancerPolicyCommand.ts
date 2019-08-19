import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoadBalancerPolicy } from "../model/operations/DeleteLoadBalancerPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoadBalancerPolicyInput } from "../types/DeleteLoadBalancerPolicyInput";
import { DeleteLoadBalancerPolicyOutput } from "../types/DeleteLoadBalancerPolicyOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DeleteLoadBalancerPolicyInput";
export * from "../types/DeleteLoadBalancerPolicyOutput";
export * from "../types/DeleteLoadBalancerPolicyExceptionsUnion";

export class DeleteLoadBalancerPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoadBalancerPolicyInput,
      OutputTypesUnion,
      DeleteLoadBalancerPolicyOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLoadBalancerPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoadBalancerPolicyInput,
    DeleteLoadBalancerPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoadBalancerPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoadBalancerPolicyInput,
    DeleteLoadBalancerPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLoadBalancerPolicyInput, DeleteLoadBalancerPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
