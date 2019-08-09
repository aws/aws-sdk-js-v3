import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLoggerDefinitionVersion } from "../model/CreateLoggerDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoggerDefinitionVersionInput } from "../types/CreateLoggerDefinitionVersionInput";
import { CreateLoggerDefinitionVersionOutput } from "../types/CreateLoggerDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateLoggerDefinitionVersionInput";
export * from "../types/CreateLoggerDefinitionVersionOutput";
export * from "../types/CreateLoggerDefinitionVersionExceptionsUnion";

export class CreateLoggerDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoggerDefinitionVersionInput,
      OutputTypesUnion,
      CreateLoggerDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLoggerDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoggerDefinitionVersionInput,
    CreateLoggerDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLoggerDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoggerDefinitionVersionInput,
    CreateLoggerDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateLoggerDefinitionVersionInput,
        CreateLoggerDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
