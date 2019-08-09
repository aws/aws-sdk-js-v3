import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopThingRegistrationTask } from "../model/StopThingRegistrationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopThingRegistrationTaskInput } from "../types/StopThingRegistrationTaskInput";
import { StopThingRegistrationTaskOutput } from "../types/StopThingRegistrationTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/StopThingRegistrationTaskInput";
export * from "../types/StopThingRegistrationTaskOutput";
export * from "../types/StopThingRegistrationTaskExceptionsUnion";

export class StopThingRegistrationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopThingRegistrationTaskInput,
      OutputTypesUnion,
      StopThingRegistrationTaskOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopThingRegistrationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopThingRegistrationTaskInput,
    StopThingRegistrationTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopThingRegistrationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopThingRegistrationTaskInput,
    StopThingRegistrationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopThingRegistrationTaskInput, StopThingRegistrationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
