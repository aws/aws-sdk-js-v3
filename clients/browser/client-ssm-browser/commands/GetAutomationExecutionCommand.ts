import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAutomationExecution } from "../model/operations/GetAutomationExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAutomationExecutionInput } from "../types/GetAutomationExecutionInput";
import { GetAutomationExecutionOutput } from "../types/GetAutomationExecutionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetAutomationExecutionInput";
export * from "../types/GetAutomationExecutionOutput";
export * from "../types/GetAutomationExecutionExceptionsUnion";

export class GetAutomationExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAutomationExecutionInput,
      OutputTypesUnion,
      GetAutomationExecutionOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = GetAutomationExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAutomationExecutionInput,
    GetAutomationExecutionOutput,
    Blob
  >();

  constructor(readonly input: GetAutomationExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAutomationExecutionInput,
    GetAutomationExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAutomationExecutionInput, GetAutomationExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
