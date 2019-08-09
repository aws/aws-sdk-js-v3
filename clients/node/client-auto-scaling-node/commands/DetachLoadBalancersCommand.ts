import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachLoadBalancers } from "../model/DetachLoadBalancers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachLoadBalancersInput } from "../types/DetachLoadBalancersInput";
import { DetachLoadBalancersOutput } from "../types/DetachLoadBalancersOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DetachLoadBalancersInput";
export * from "../types/DetachLoadBalancersOutput";
export * from "../types/DetachLoadBalancersExceptionsUnion";

export class DetachLoadBalancersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachLoadBalancersInput,
      OutputTypesUnion,
      DetachLoadBalancersOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachLoadBalancers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachLoadBalancersInput,
    DetachLoadBalancersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachLoadBalancersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachLoadBalancersInput,
    DetachLoadBalancersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachLoadBalancersInput, DetachLoadBalancersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
