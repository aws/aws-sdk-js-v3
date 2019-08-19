import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddListenerCertificates } from "../model/operations/AddListenerCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddListenerCertificatesInput } from "../types/AddListenerCertificatesInput";
import { AddListenerCertificatesOutput } from "../types/AddListenerCertificatesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/AddListenerCertificatesInput";
export * from "../types/AddListenerCertificatesOutput";
export * from "../types/AddListenerCertificatesExceptionsUnion";

export class AddListenerCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddListenerCertificatesInput,
      OutputTypesUnion,
      AddListenerCertificatesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = AddListenerCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddListenerCertificatesInput,
    AddListenerCertificatesOutput,
    Blob
  >();

  constructor(readonly input: AddListenerCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddListenerCertificatesInput,
    AddListenerCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddListenerCertificatesInput, AddListenerCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
