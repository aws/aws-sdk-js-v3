import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLoadBalancerTlsCertificates } from "../model/operations/GetLoadBalancerTlsCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoadBalancerTlsCertificatesInput } from "../types/GetLoadBalancerTlsCertificatesInput";
import { GetLoadBalancerTlsCertificatesOutput } from "../types/GetLoadBalancerTlsCertificatesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetLoadBalancerTlsCertificatesInput";
export * from "../types/GetLoadBalancerTlsCertificatesOutput";
export * from "../types/GetLoadBalancerTlsCertificatesExceptionsUnion";

export class GetLoadBalancerTlsCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoadBalancerTlsCertificatesInput,
      OutputTypesUnion,
      GetLoadBalancerTlsCertificatesOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLoadBalancerTlsCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoadBalancerTlsCertificatesInput,
    GetLoadBalancerTlsCertificatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLoadBalancerTlsCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLoadBalancerTlsCertificatesInput,
    GetLoadBalancerTlsCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetLoadBalancerTlsCertificatesInput,
        GetLoadBalancerTlsCertificatesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
