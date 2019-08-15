import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFlowEntitlement } from "../model/operations/UpdateFlowEntitlement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFlowEntitlementInput } from "../types/UpdateFlowEntitlementInput";
import { UpdateFlowEntitlementOutput } from "../types/UpdateFlowEntitlementOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/UpdateFlowEntitlementInput";
export * from "../types/UpdateFlowEntitlementOutput";
export * from "../types/UpdateFlowEntitlementExceptionsUnion";

export class UpdateFlowEntitlementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFlowEntitlementInput,
      OutputTypesUnion,
      UpdateFlowEntitlementOutput,
      MediaConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFlowEntitlement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFlowEntitlementInput,
    UpdateFlowEntitlementOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFlowEntitlementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFlowEntitlementInput,
    UpdateFlowEntitlementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFlowEntitlementInput, UpdateFlowEntitlementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
