import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterTargets } from "../model/operations/RegisterTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterTargetsInput } from "../types/RegisterTargetsInput";
import { RegisterTargetsOutput } from "../types/RegisterTargetsOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/RegisterTargetsInput";
export * from "../types/RegisterTargetsOutput";
export * from "../types/RegisterTargetsExceptionsUnion";

export class RegisterTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterTargetsInput,
      OutputTypesUnion,
      RegisterTargetsOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterTargetsInput,
    RegisterTargetsOutput,
    Blob
  >();

  constructor(readonly input: RegisterTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterTargetsInput, RegisterTargetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterTargetsInput, RegisterTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
