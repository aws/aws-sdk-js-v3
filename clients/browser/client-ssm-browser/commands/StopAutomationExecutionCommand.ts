import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopAutomationExecution } from "../model/operations/StopAutomationExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopAutomationExecutionInput } from "../types/StopAutomationExecutionInput";
import { StopAutomationExecutionOutput } from "../types/StopAutomationExecutionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/StopAutomationExecutionInput";
export * from "../types/StopAutomationExecutionOutput";
export * from "../types/StopAutomationExecutionExceptionsUnion";

export class StopAutomationExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopAutomationExecutionInput,
      OutputTypesUnion,
      StopAutomationExecutionOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = StopAutomationExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopAutomationExecutionInput,
    StopAutomationExecutionOutput,
    Blob
  >();

  constructor(readonly input: StopAutomationExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopAutomationExecutionInput,
    StopAutomationExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopAutomationExecutionInput, StopAutomationExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
