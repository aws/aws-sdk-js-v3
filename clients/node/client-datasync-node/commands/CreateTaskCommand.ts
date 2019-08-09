import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTask } from "../model/CreateTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTaskInput } from "../types/CreateTaskInput";
import { CreateTaskOutput } from "../types/CreateTaskOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CreateTaskInput";
export * from "../types/CreateTaskOutput";
export * from "../types/CreateTaskExceptionsUnion";

export class CreateTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTaskInput,
      OutputTypesUnion,
      CreateTaskOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTaskInput,
    CreateTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTaskInput, CreateTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTaskInput, CreateTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
