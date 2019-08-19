import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEventTracker } from "../model/operations/DeleteEventTracker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventTrackerInput } from "../types/DeleteEventTrackerInput";
import { DeleteEventTrackerOutput } from "../types/DeleteEventTrackerOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DeleteEventTrackerInput";
export * from "../types/DeleteEventTrackerOutput";
export * from "../types/DeleteEventTrackerExceptionsUnion";

export class DeleteEventTrackerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventTrackerInput,
      OutputTypesUnion,
      DeleteEventTrackerOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEventTracker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventTrackerInput,
    DeleteEventTrackerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEventTrackerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEventTrackerInput,
    DeleteEventTrackerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventTrackerInput, DeleteEventTrackerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
