import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateProgressUpdateStream } from "../model/CreateProgressUpdateStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProgressUpdateStreamInput } from "../types/CreateProgressUpdateStreamInput";
import { CreateProgressUpdateStreamOutput } from "../types/CreateProgressUpdateStreamOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/CreateProgressUpdateStreamInput";
export * from "../types/CreateProgressUpdateStreamOutput";
export * from "../types/CreateProgressUpdateStreamExceptionsUnion";

export class CreateProgressUpdateStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProgressUpdateStreamInput,
      OutputTypesUnion,
      CreateProgressUpdateStreamOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateProgressUpdateStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProgressUpdateStreamInput,
    CreateProgressUpdateStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateProgressUpdateStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateProgressUpdateStreamInput,
    CreateProgressUpdateStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateProgressUpdateStreamInput,
        CreateProgressUpdateStreamOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
