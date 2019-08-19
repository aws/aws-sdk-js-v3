import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoadBalancer } from "../model/operations/DeleteLoadBalancer";
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
      _stream.Readable
    > {
  readonly model = DeleteLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoadBalancerInput,
    DeleteLoadBalancerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
