import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterTargets } from "../model/RegisterTargets";
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
      _stream.Readable
    > {
  readonly model = RegisterTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterTargetsInput,
    RegisterTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
