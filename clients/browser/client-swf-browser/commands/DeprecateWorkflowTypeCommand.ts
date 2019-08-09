import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeprecateWorkflowType } from "../model/DeprecateWorkflowType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprecateWorkflowTypeInput } from "../types/DeprecateWorkflowTypeInput";
import { DeprecateWorkflowTypeOutput } from "../types/DeprecateWorkflowTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/DeprecateWorkflowTypeInput";
export * from "../types/DeprecateWorkflowTypeOutput";
export * from "../types/DeprecateWorkflowTypeExceptionsUnion";

export class DeprecateWorkflowTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprecateWorkflowTypeInput,
      OutputTypesUnion,
      DeprecateWorkflowTypeOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = DeprecateWorkflowType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateWorkflowTypeInput,
    DeprecateWorkflowTypeOutput,
    Blob
  >();

  constructor(readonly input: DeprecateWorkflowTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeprecateWorkflowTypeInput,
    DeprecateWorkflowTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprecateWorkflowTypeInput, DeprecateWorkflowTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
