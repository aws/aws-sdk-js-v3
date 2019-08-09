import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachInstancesToLoadBalancer } from "../model/AttachInstancesToLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachInstancesToLoadBalancerInput } from "../types/AttachInstancesToLoadBalancerInput";
import { AttachInstancesToLoadBalancerOutput } from "../types/AttachInstancesToLoadBalancerOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/AttachInstancesToLoadBalancerInput";
export * from "../types/AttachInstancesToLoadBalancerOutput";
export * from "../types/AttachInstancesToLoadBalancerExceptionsUnion";

export class AttachInstancesToLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachInstancesToLoadBalancerInput,
      OutputTypesUnion,
      AttachInstancesToLoadBalancerOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachInstancesToLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachInstancesToLoadBalancerInput,
    AttachInstancesToLoadBalancerOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachInstancesToLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachInstancesToLoadBalancerInput,
    AttachInstancesToLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AttachInstancesToLoadBalancerInput,
        AttachInstancesToLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
