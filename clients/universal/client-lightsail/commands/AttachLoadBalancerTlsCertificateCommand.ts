import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachLoadBalancerTlsCertificate } from "../model/AttachLoadBalancerTlsCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachLoadBalancerTlsCertificateInput } from "../types/AttachLoadBalancerTlsCertificateInput";
import { AttachLoadBalancerTlsCertificateOutput } from "../types/AttachLoadBalancerTlsCertificateOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/AttachLoadBalancerTlsCertificateInput";
export * from "../types/AttachLoadBalancerTlsCertificateOutput";
export * from "../types/AttachLoadBalancerTlsCertificateExceptionsUnion";

export class AttachLoadBalancerTlsCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachLoadBalancerTlsCertificateInput,
      OutputTypesUnion,
      AttachLoadBalancerTlsCertificateOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachLoadBalancerTlsCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachLoadBalancerTlsCertificateInput,
    AttachLoadBalancerTlsCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachLoadBalancerTlsCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachLoadBalancerTlsCertificateInput,
    AttachLoadBalancerTlsCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AttachLoadBalancerTlsCertificateInput,
        AttachLoadBalancerTlsCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
