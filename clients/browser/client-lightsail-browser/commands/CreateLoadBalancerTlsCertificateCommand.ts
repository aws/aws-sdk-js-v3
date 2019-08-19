import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLoadBalancerTlsCertificate } from "../model/operations/CreateLoadBalancerTlsCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoadBalancerTlsCertificateInput } from "../types/CreateLoadBalancerTlsCertificateInput";
import { CreateLoadBalancerTlsCertificateOutput } from "../types/CreateLoadBalancerTlsCertificateOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateLoadBalancerTlsCertificateInput";
export * from "../types/CreateLoadBalancerTlsCertificateOutput";
export * from "../types/CreateLoadBalancerTlsCertificateExceptionsUnion";

export class CreateLoadBalancerTlsCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoadBalancerTlsCertificateInput,
      OutputTypesUnion,
      CreateLoadBalancerTlsCertificateOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLoadBalancerTlsCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoadBalancerTlsCertificateInput,
    CreateLoadBalancerTlsCertificateOutput,
    Blob
  >();

  constructor(readonly input: CreateLoadBalancerTlsCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoadBalancerTlsCertificateInput,
    CreateLoadBalancerTlsCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateLoadBalancerTlsCertificateInput,
        CreateLoadBalancerTlsCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
