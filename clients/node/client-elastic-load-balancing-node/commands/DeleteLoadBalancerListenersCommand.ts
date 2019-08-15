import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoadBalancerListeners } from "../model/operations/DeleteLoadBalancerListeners";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoadBalancerListenersInput } from "../types/DeleteLoadBalancerListenersInput";
import { DeleteLoadBalancerListenersOutput } from "../types/DeleteLoadBalancerListenersOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DeleteLoadBalancerListenersInput";
export * from "../types/DeleteLoadBalancerListenersOutput";
export * from "../types/DeleteLoadBalancerListenersExceptionsUnion";

export class DeleteLoadBalancerListenersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoadBalancerListenersInput,
      OutputTypesUnion,
      DeleteLoadBalancerListenersOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLoadBalancerListeners;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoadBalancerListenersInput,
    DeleteLoadBalancerListenersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoadBalancerListenersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoadBalancerListenersInput,
    DeleteLoadBalancerListenersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteLoadBalancerListenersInput,
        DeleteLoadBalancerListenersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
