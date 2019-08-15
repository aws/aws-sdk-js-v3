import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GrantFlowEntitlements } from "../model/operations/GrantFlowEntitlements";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GrantFlowEntitlementsInput } from "../types/GrantFlowEntitlementsInput";
import { GrantFlowEntitlementsOutput } from "../types/GrantFlowEntitlementsOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/GrantFlowEntitlementsInput";
export * from "../types/GrantFlowEntitlementsOutput";
export * from "../types/GrantFlowEntitlementsExceptionsUnion";

export class GrantFlowEntitlementsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GrantFlowEntitlementsInput,
      OutputTypesUnion,
      GrantFlowEntitlementsOutput,
      MediaConnectResolvedConfiguration,
      Blob
    > {
  readonly model = GrantFlowEntitlements;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GrantFlowEntitlementsInput,
    GrantFlowEntitlementsOutput,
    Blob
  >();

  constructor(readonly input: GrantFlowEntitlementsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GrantFlowEntitlementsInput,
    GrantFlowEntitlementsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GrantFlowEntitlementsInput, GrantFlowEntitlementsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
