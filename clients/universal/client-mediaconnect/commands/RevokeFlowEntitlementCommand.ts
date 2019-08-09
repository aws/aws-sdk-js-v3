import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RevokeFlowEntitlement } from "../model/RevokeFlowEntitlement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeFlowEntitlementInput } from "../types/RevokeFlowEntitlementInput";
import { RevokeFlowEntitlementOutput } from "../types/RevokeFlowEntitlementOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/RevokeFlowEntitlementInput";
export * from "../types/RevokeFlowEntitlementOutput";
export * from "../types/RevokeFlowEntitlementExceptionsUnion";

export class RevokeFlowEntitlementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeFlowEntitlementInput,
      OutputTypesUnion,
      RevokeFlowEntitlementOutput,
      MediaConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RevokeFlowEntitlement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeFlowEntitlementInput,
    RevokeFlowEntitlementOutput,
    Uint8Array
  >();

  constructor(readonly input: RevokeFlowEntitlementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeFlowEntitlementInput,
    RevokeFlowEntitlementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeFlowEntitlementInput, RevokeFlowEntitlementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
