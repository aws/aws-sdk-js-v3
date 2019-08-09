import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetTaskStatus } from "../model/SetTaskStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetTaskStatusInput } from "../types/SetTaskStatusInput";
import { SetTaskStatusOutput } from "../types/SetTaskStatusOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/SetTaskStatusInput";
export * from "../types/SetTaskStatusOutput";
export * from "../types/SetTaskStatusExceptionsUnion";

export class SetTaskStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetTaskStatusInput,
      OutputTypesUnion,
      SetTaskStatusOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetTaskStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetTaskStatusInput,
    SetTaskStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetTaskStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<SetTaskStatusInput, SetTaskStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetTaskStatusInput, SetTaskStatusOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
