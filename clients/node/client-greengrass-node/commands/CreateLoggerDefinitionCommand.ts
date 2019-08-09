import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLoggerDefinition } from "../model/CreateLoggerDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoggerDefinitionInput } from "../types/CreateLoggerDefinitionInput";
import { CreateLoggerDefinitionOutput } from "../types/CreateLoggerDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateLoggerDefinitionInput";
export * from "../types/CreateLoggerDefinitionOutput";
export * from "../types/CreateLoggerDefinitionExceptionsUnion";

export class CreateLoggerDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoggerDefinitionInput,
      OutputTypesUnion,
      CreateLoggerDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLoggerDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoggerDefinitionInput,
    CreateLoggerDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLoggerDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoggerDefinitionInput,
    CreateLoggerDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLoggerDefinitionInput, CreateLoggerDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
