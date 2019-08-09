import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeClusterSecurityGroupIngress } from "../model/RevokeClusterSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeClusterSecurityGroupIngressInput } from "../types/RevokeClusterSecurityGroupIngressInput";
import { RevokeClusterSecurityGroupIngressOutput } from "../types/RevokeClusterSecurityGroupIngressOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/RevokeClusterSecurityGroupIngressInput";
export * from "../types/RevokeClusterSecurityGroupIngressOutput";
export * from "../types/RevokeClusterSecurityGroupIngressExceptionsUnion";

export class RevokeClusterSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeClusterSecurityGroupIngressInput,
      OutputTypesUnion,
      RevokeClusterSecurityGroupIngressOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeClusterSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeClusterSecurityGroupIngressInput,
    RevokeClusterSecurityGroupIngressOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeClusterSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeClusterSecurityGroupIngressInput,
    RevokeClusterSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RevokeClusterSecurityGroupIngressInput,
        RevokeClusterSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
