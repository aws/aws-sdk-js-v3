import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RevokeCacheSecurityGroupIngress } from "../model/operations/RevokeCacheSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeCacheSecurityGroupIngressInput } from "../types/RevokeCacheSecurityGroupIngressInput";
import { RevokeCacheSecurityGroupIngressOutput } from "../types/RevokeCacheSecurityGroupIngressOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/RevokeCacheSecurityGroupIngressInput";
export * from "../types/RevokeCacheSecurityGroupIngressOutput";
export * from "../types/RevokeCacheSecurityGroupIngressExceptionsUnion";

export class RevokeCacheSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeCacheSecurityGroupIngressInput,
      OutputTypesUnion,
      RevokeCacheSecurityGroupIngressOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = RevokeCacheSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeCacheSecurityGroupIngressInput,
    RevokeCacheSecurityGroupIngressOutput,
    Blob
  >();

  constructor(readonly input: RevokeCacheSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeCacheSecurityGroupIngressInput,
    RevokeCacheSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RevokeCacheSecurityGroupIngressInput,
        RevokeCacheSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
