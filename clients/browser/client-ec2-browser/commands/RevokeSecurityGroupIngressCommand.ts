import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RevokeSecurityGroupIngress } from "../model/operations/RevokeSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeSecurityGroupIngressInput } from "../types/RevokeSecurityGroupIngressInput";
import { RevokeSecurityGroupIngressOutput } from "../types/RevokeSecurityGroupIngressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RevokeSecurityGroupIngressInput";
export * from "../types/RevokeSecurityGroupIngressOutput";
export * from "../types/RevokeSecurityGroupIngressExceptionsUnion";

export class RevokeSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeSecurityGroupIngressInput,
      OutputTypesUnion,
      RevokeSecurityGroupIngressOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RevokeSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeSecurityGroupIngressInput,
    RevokeSecurityGroupIngressOutput,
    Blob
  >();

  constructor(readonly input: RevokeSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeSecurityGroupIngressInput,
    RevokeSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RevokeSecurityGroupIngressInput,
        RevokeSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
