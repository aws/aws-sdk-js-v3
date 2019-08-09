import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetSubnets } from "../model/SetSubnets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetSubnetsInput } from "../types/SetSubnetsInput";
import { SetSubnetsOutput } from "../types/SetSubnetsOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/SetSubnetsInput";
export * from "../types/SetSubnetsOutput";
export * from "../types/SetSubnetsExceptionsUnion";

export class SetSubnetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetSubnetsInput,
      OutputTypesUnion,
      SetSubnetsOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetSubnets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetSubnetsInput,
    SetSubnetsOutput,
    Uint8Array
  >();

  constructor(readonly input: SetSubnetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<SetSubnetsInput, SetSubnetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetSubnetsInput, SetSubnetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
