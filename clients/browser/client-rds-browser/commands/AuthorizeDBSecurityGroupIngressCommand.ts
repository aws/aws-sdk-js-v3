import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AuthorizeDBSecurityGroupIngress } from "../model/AuthorizeDBSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeDBSecurityGroupIngressInput } from "../types/AuthorizeDBSecurityGroupIngressInput";
import { AuthorizeDBSecurityGroupIngressOutput } from "../types/AuthorizeDBSecurityGroupIngressOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/AuthorizeDBSecurityGroupIngressInput";
export * from "../types/AuthorizeDBSecurityGroupIngressOutput";
export * from "../types/AuthorizeDBSecurityGroupIngressExceptionsUnion";

export class AuthorizeDBSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeDBSecurityGroupIngressInput,
      OutputTypesUnion,
      AuthorizeDBSecurityGroupIngressOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = AuthorizeDBSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeDBSecurityGroupIngressInput,
    AuthorizeDBSecurityGroupIngressOutput,
    Blob
  >();

  constructor(readonly input: AuthorizeDBSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeDBSecurityGroupIngressInput,
    AuthorizeDBSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AuthorizeDBSecurityGroupIngressInput,
        AuthorizeDBSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
