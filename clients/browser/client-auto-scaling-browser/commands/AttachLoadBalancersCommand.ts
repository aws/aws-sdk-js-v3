import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachLoadBalancers } from "../model/operations/AttachLoadBalancers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachLoadBalancersInput } from "../types/AttachLoadBalancersInput";
import { AttachLoadBalancersOutput } from "../types/AttachLoadBalancersOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/AttachLoadBalancersInput";
export * from "../types/AttachLoadBalancersOutput";
export * from "../types/AttachLoadBalancersExceptionsUnion";

export class AttachLoadBalancersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachLoadBalancersInput,
      OutputTypesUnion,
      AttachLoadBalancersOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = AttachLoadBalancers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachLoadBalancersInput,
    AttachLoadBalancersOutput,
    Blob
  >();

  constructor(readonly input: AttachLoadBalancersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachLoadBalancersInput,
    AttachLoadBalancersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachLoadBalancersInput, AttachLoadBalancersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
