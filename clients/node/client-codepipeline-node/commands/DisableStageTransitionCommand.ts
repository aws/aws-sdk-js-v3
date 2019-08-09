import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableStageTransition } from "../model/DisableStageTransition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableStageTransitionInput } from "../types/DisableStageTransitionInput";
import { DisableStageTransitionOutput } from "../types/DisableStageTransitionOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/DisableStageTransitionInput";
export * from "../types/DisableStageTransitionOutput";
export * from "../types/DisableStageTransitionExceptionsUnion";

export class DisableStageTransitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableStageTransitionInput,
      OutputTypesUnion,
      DisableStageTransitionOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableStageTransition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableStageTransitionInput,
    DisableStageTransitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableStageTransitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableStageTransitionInput,
    DisableStageTransitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableStageTransitionInput, DisableStageTransitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
