import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AuthorizeCacheSecurityGroupIngress } from "../model/operations/AuthorizeCacheSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeCacheSecurityGroupIngressInput } from "../types/AuthorizeCacheSecurityGroupIngressInput";
import { AuthorizeCacheSecurityGroupIngressOutput } from "../types/AuthorizeCacheSecurityGroupIngressOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/AuthorizeCacheSecurityGroupIngressInput";
export * from "../types/AuthorizeCacheSecurityGroupIngressOutput";
export * from "../types/AuthorizeCacheSecurityGroupIngressExceptionsUnion";

export class AuthorizeCacheSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeCacheSecurityGroupIngressInput,
      OutputTypesUnion,
      AuthorizeCacheSecurityGroupIngressOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AuthorizeCacheSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeCacheSecurityGroupIngressInput,
    AuthorizeCacheSecurityGroupIngressOutput,
    _stream.Readable
  >();

  constructor(readonly input: AuthorizeCacheSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeCacheSecurityGroupIngressInput,
    AuthorizeCacheSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AuthorizeCacheSecurityGroupIngressInput,
        AuthorizeCacheSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
