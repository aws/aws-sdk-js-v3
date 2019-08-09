import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartAutomationExecution } from "../model/StartAutomationExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartAutomationExecutionInput } from "../types/StartAutomationExecutionInput";
import { StartAutomationExecutionOutput } from "../types/StartAutomationExecutionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/StartAutomationExecutionInput";
export * from "../types/StartAutomationExecutionOutput";
export * from "../types/StartAutomationExecutionExceptionsUnion";

export class StartAutomationExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartAutomationExecutionInput,
      OutputTypesUnion,
      StartAutomationExecutionOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartAutomationExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAutomationExecutionInput,
    StartAutomationExecutionOutput,
    Uint8Array
  >();

  constructor(readonly input: StartAutomationExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartAutomationExecutionInput,
    StartAutomationExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartAutomationExecutionInput, StartAutomationExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
