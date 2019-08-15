import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLoadBalancer } from "../model/operations/GetLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoadBalancerInput } from "../types/GetLoadBalancerInput";
import { GetLoadBalancerOutput } from "../types/GetLoadBalancerOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetLoadBalancerInput";
export * from "../types/GetLoadBalancerOutput";
export * from "../types/GetLoadBalancerExceptionsUnion";

export class GetLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoadBalancerInput,
      OutputTypesUnion,
      GetLoadBalancerOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoadBalancerInput,
    GetLoadBalancerOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLoadBalancerInput, GetLoadBalancerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoadBalancerInput, GetLoadBalancerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
