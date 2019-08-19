import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLogGroup } from "../model/operations/CreateLogGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLogGroupInput } from "../types/CreateLogGroupInput";
import { CreateLogGroupOutput } from "../types/CreateLogGroupOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/CreateLogGroupInput";
export * from "../types/CreateLogGroupOutput";
export * from "../types/CreateLogGroupExceptionsUnion";

export class CreateLogGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLogGroupInput,
      OutputTypesUnion,
      CreateLogGroupOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLogGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLogGroupInput,
    CreateLogGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLogGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLogGroupInput, CreateLogGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLogGroupInput, CreateLogGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
