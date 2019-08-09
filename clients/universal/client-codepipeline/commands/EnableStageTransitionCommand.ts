import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableStageTransition } from "../model/EnableStageTransition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableStageTransitionInput } from "../types/EnableStageTransitionInput";
import { EnableStageTransitionOutput } from "../types/EnableStageTransitionOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/EnableStageTransitionInput";
export * from "../types/EnableStageTransitionOutput";
export * from "../types/EnableStageTransitionExceptionsUnion";

export class EnableStageTransitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableStageTransitionInput,
      OutputTypesUnion,
      EnableStageTransitionOutput,
      CodePipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnableStageTransition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableStageTransitionInput,
    EnableStageTransitionOutput,
    Uint8Array
  >();

  constructor(readonly input: EnableStageTransitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableStageTransitionInput,
    EnableStageTransitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableStageTransitionInput, EnableStageTransitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
