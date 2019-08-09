import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RevokeDBSecurityGroupIngress } from "../model/RevokeDBSecurityGroupIngress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeDBSecurityGroupIngressInput } from "../types/RevokeDBSecurityGroupIngressInput";
import { RevokeDBSecurityGroupIngressOutput } from "../types/RevokeDBSecurityGroupIngressOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RevokeDBSecurityGroupIngressInput";
export * from "../types/RevokeDBSecurityGroupIngressOutput";
export * from "../types/RevokeDBSecurityGroupIngressExceptionsUnion";

export class RevokeDBSecurityGroupIngressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeDBSecurityGroupIngressInput,
      OutputTypesUnion,
      RevokeDBSecurityGroupIngressOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RevokeDBSecurityGroupIngress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeDBSecurityGroupIngressInput,
    RevokeDBSecurityGroupIngressOutput,
    Uint8Array
  >();

  constructor(readonly input: RevokeDBSecurityGroupIngressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeDBSecurityGroupIngressInput,
    RevokeDBSecurityGroupIngressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RevokeDBSecurityGroupIngressInput,
        RevokeDBSecurityGroupIngressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
