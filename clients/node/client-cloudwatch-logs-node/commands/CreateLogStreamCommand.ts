import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLogStream } from "../model/CreateLogStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLogStreamInput } from "../types/CreateLogStreamInput";
import { CreateLogStreamOutput } from "../types/CreateLogStreamOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/CreateLogStreamInput";
export * from "../types/CreateLogStreamOutput";
export * from "../types/CreateLogStreamExceptionsUnion";

export class CreateLogStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLogStreamInput,
      OutputTypesUnion,
      CreateLogStreamOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLogStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLogStreamInput,
    CreateLogStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLogStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLogStreamInput, CreateLogStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLogStreamInput, CreateLogStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
