import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterTargets } from "../model/DeregisterTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterTargetsInput } from "../types/DeregisterTargetsInput";
import { DeregisterTargetsOutput } from "../types/DeregisterTargetsOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DeregisterTargetsInput";
export * from "../types/DeregisterTargetsOutput";
export * from "../types/DeregisterTargetsExceptionsUnion";

export class DeregisterTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterTargetsInput,
      OutputTypesUnion,
      DeregisterTargetsOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterTargetsInput,
    DeregisterTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeregisterTargetsInput, DeregisterTargetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterTargetsInput, DeregisterTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
