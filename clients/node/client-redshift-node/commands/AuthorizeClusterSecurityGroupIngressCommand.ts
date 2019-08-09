import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AuthorizeClusterSecurityGroupIngress } from "../model/AuthorizeClusterSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeClusterSecurityGroupIngressInput } from "../types/AuthorizeClusterSecurityGroupIngressInput";
import { AuthorizeClusterSecurityGroupIngressOutput } from "../types/AuthorizeClusterSecurityGroupIngressOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/AuthorizeClusterSecurityGroupIngressInput";
export * from "../types/AuthorizeClusterSecurityGroupIngressOutput";
export * from "../types/AuthorizeClusterSecurityGroupIngressExceptionsUnion";

export class AuthorizeClusterSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeClusterSecurityGroupIngressInput,
      OutputTypesUnion,
      AuthorizeClusterSecurityGroupIngressOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AuthorizeClusterSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeClusterSecurityGroupIngressInput,
    AuthorizeClusterSecurityGroupIngressOutput,
    _stream.Readable
  >();

  constructor(readonly input: AuthorizeClusterSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeClusterSecurityGroupIngressInput,
    AuthorizeClusterSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AuthorizeClusterSecurityGroupIngressInput,
        AuthorizeClusterSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
