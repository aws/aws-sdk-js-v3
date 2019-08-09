import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UndeprecateWorkflowType } from "../model/UndeprecateWorkflowType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UndeprecateWorkflowTypeInput } from "../types/UndeprecateWorkflowTypeInput";
import { UndeprecateWorkflowTypeOutput } from "../types/UndeprecateWorkflowTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/UndeprecateWorkflowTypeInput";
export * from "../types/UndeprecateWorkflowTypeOutput";
export * from "../types/UndeprecateWorkflowTypeExceptionsUnion";

export class UndeprecateWorkflowTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UndeprecateWorkflowTypeInput,
      OutputTypesUnion,
      UndeprecateWorkflowTypeOutput,
      SWFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UndeprecateWorkflowType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UndeprecateWorkflowTypeInput,
    UndeprecateWorkflowTypeOutput,
    Uint8Array
  >();

  constructor(readonly input: UndeprecateWorkflowTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UndeprecateWorkflowTypeInput,
    UndeprecateWorkflowTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UndeprecateWorkflowTypeInput, UndeprecateWorkflowTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
