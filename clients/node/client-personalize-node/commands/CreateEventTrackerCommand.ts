import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEventTracker } from "../model/operations/CreateEventTracker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEventTrackerInput } from "../types/CreateEventTrackerInput";
import { CreateEventTrackerOutput } from "../types/CreateEventTrackerOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/CreateEventTrackerInput";
export * from "../types/CreateEventTrackerOutput";
export * from "../types/CreateEventTrackerExceptionsUnion";

export class CreateEventTrackerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEventTrackerInput,
      OutputTypesUnion,
      CreateEventTrackerOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateEventTracker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEventTrackerInput,
    CreateEventTrackerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateEventTrackerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEventTrackerInput,
    CreateEventTrackerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEventTrackerInput, CreateEventTrackerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
