import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartThingRegistrationTask } from "../model/operations/StartThingRegistrationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartThingRegistrationTaskInput } from "../types/StartThingRegistrationTaskInput";
import { StartThingRegistrationTaskOutput } from "../types/StartThingRegistrationTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/StartThingRegistrationTaskInput";
export * from "../types/StartThingRegistrationTaskOutput";
export * from "../types/StartThingRegistrationTaskExceptionsUnion";

export class StartThingRegistrationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartThingRegistrationTaskInput,
      OutputTypesUnion,
      StartThingRegistrationTaskOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartThingRegistrationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartThingRegistrationTaskInput,
    StartThingRegistrationTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartThingRegistrationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartThingRegistrationTaskInput,
    StartThingRegistrationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartThingRegistrationTaskInput,
        StartThingRegistrationTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
