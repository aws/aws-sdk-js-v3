import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopTask } from "../model/operations/StopTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopTaskInput } from "../types/StopTaskInput";
import { StopTaskOutput } from "../types/StopTaskOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/StopTaskInput";
export * from "../types/StopTaskOutput";
export * from "../types/StopTaskExceptionsUnion";

export class StopTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopTaskInput,
      OutputTypesUnion,
      StopTaskOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = StopTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopTaskInput,
    StopTaskOutput,
    Blob
  >();

  constructor(readonly input: StopTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<StopTaskInput, StopTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopTaskInput, StopTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
