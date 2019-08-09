import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSMBSecurityStrategy } from "../model/UpdateSMBSecurityStrategy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSMBSecurityStrategyInput } from "../types/UpdateSMBSecurityStrategyInput";
import { UpdateSMBSecurityStrategyOutput } from "../types/UpdateSMBSecurityStrategyOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateSMBSecurityStrategyInput";
export * from "../types/UpdateSMBSecurityStrategyOutput";
export * from "../types/UpdateSMBSecurityStrategyExceptionsUnion";

export class UpdateSMBSecurityStrategyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSMBSecurityStrategyInput,
      OutputTypesUnion,
      UpdateSMBSecurityStrategyOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateSMBSecurityStrategy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSMBSecurityStrategyInput,
    UpdateSMBSecurityStrategyOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateSMBSecurityStrategyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSMBSecurityStrategyInput,
    UpdateSMBSecurityStrategyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
