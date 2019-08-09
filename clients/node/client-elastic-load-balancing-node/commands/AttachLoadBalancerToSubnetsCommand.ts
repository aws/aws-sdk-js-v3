import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachLoadBalancerToSubnets } from "../model/AttachLoadBalancerToSubnets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachLoadBalancerToSubnetsInput } from "../types/AttachLoadBalancerToSubnetsInput";
import { AttachLoadBalancerToSubnetsOutput } from "../types/AttachLoadBalancerToSubnetsOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/AttachLoadBalancerToSubnetsInput";
export * from "../types/AttachLoadBalancerToSubnetsOutput";
export * from "../types/AttachLoadBalancerToSubnetsExceptionsUnion";

export class AttachLoadBalancerToSubnetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachLoadBalancerToSubnetsInput,
      OutputTypesUnion,
      AttachLoadBalancerToSubnetsOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachLoadBalancerToSubnets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachLoadBalancerToSubnetsInput,
    AttachLoadBalancerToSubnetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachLoadBalancerToSubnetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachLoadBalancerToSubnetsInput,
    AttachLoadBalancerToSubnetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AttachLoadBalancerToSubnetsInput,
        AttachLoadBalancerToSubnetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
