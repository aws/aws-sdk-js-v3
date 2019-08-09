import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveListenerCertificates } from "../model/RemoveListenerCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveListenerCertificatesInput } from "../types/RemoveListenerCertificatesInput";
import { RemoveListenerCertificatesOutput } from "../types/RemoveListenerCertificatesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/RemoveListenerCertificatesInput";
export * from "../types/RemoveListenerCertificatesOutput";
export * from "../types/RemoveListenerCertificatesExceptionsUnion";

export class RemoveListenerCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveListenerCertificatesInput,
      OutputTypesUnion,
      RemoveListenerCertificatesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveListenerCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveListenerCertificatesInput,
    RemoveListenerCertificatesOutput,
    Blob
  >();

  constructor(readonly input: RemoveListenerCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveListenerCertificatesInput,
    RemoveListenerCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveListenerCertificatesInput,
        RemoveListenerCertificatesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
