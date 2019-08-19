import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListThingRegistrationTasks } from "../model/operations/ListThingRegistrationTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingRegistrationTasksInput } from "../types/ListThingRegistrationTasksInput";
import { ListThingRegistrationTasksOutput } from "../types/ListThingRegistrationTasksOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingRegistrationTasksInput";
export * from "../types/ListThingRegistrationTasksOutput";
export * from "../types/ListThingRegistrationTasksExceptionsUnion";

export class ListThingRegistrationTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingRegistrationTasksInput,
      OutputTypesUnion,
      ListThingRegistrationTasksOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListThingRegistrationTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingRegistrationTasksInput,
    ListThingRegistrationTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListThingRegistrationTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThingRegistrationTasksInput,
    ListThingRegistrationTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListThingRegistrationTasksInput,
        ListThingRegistrationTasksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
