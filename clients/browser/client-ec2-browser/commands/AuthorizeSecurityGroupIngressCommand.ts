import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AuthorizeSecurityGroupIngress } from "../model/AuthorizeSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeSecurityGroupIngressInput } from "../types/AuthorizeSecurityGroupIngressInput";
import { AuthorizeSecurityGroupIngressOutput } from "../types/AuthorizeSecurityGroupIngressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AuthorizeSecurityGroupIngressInput";
export * from "../types/AuthorizeSecurityGroupIngressOutput";
export * from "../types/AuthorizeSecurityGroupIngressExceptionsUnion";

export class AuthorizeSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeSecurityGroupIngressInput,
      OutputTypesUnion,
      AuthorizeSecurityGroupIngressOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AuthorizeSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeSecurityGroupIngressInput,
    AuthorizeSecurityGroupIngressOutput,
    Blob
  >();

  constructor(readonly input: AuthorizeSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeSecurityGroupIngressInput,
    AuthorizeSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AuthorizeSecurityGroupIngressInput,
        AuthorizeSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
