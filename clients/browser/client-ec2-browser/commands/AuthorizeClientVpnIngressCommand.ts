import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AuthorizeClientVpnIngress } from "../model/operations/AuthorizeClientVpnIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeClientVpnIngressInput } from "../types/AuthorizeClientVpnIngressInput";
import { AuthorizeClientVpnIngressOutput } from "../types/AuthorizeClientVpnIngressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AuthorizeClientVpnIngressInput";
export * from "../types/AuthorizeClientVpnIngressOutput";
export * from "../types/AuthorizeClientVpnIngressExceptionsUnion";

export class AuthorizeClientVpnIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeClientVpnIngressInput,
      OutputTypesUnion,
      AuthorizeClientVpnIngressOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AuthorizeClientVpnIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeClientVpnIngressInput,
    AuthorizeClientVpnIngressOutput,
    Blob
  >();

  constructor(readonly input: AuthorizeClientVpnIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeClientVpnIngressInput,
    AuthorizeClientVpnIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AuthorizeClientVpnIngressInput, AuthorizeClientVpnIngressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
