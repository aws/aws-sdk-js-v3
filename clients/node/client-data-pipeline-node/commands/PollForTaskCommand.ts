import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PollForTask } from "../model/PollForTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PollForTaskInput } from "../types/PollForTaskInput";
import { PollForTaskOutput } from "../types/PollForTaskOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/PollForTaskInput";
export * from "../types/PollForTaskOutput";
export * from "../types/PollForTaskExceptionsUnion";

export class PollForTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PollForTaskInput,
      OutputTypesUnion,
      PollForTaskOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PollForTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PollForTaskInput,
    PollForTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: PollForTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<PollForTaskInput, PollForTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PollForTaskInput, PollForTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
