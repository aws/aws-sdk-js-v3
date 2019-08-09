import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoggerDefinition } from "../model/DeleteLoggerDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoggerDefinitionInput } from "../types/DeleteLoggerDefinitionInput";
import { DeleteLoggerDefinitionOutput } from "../types/DeleteLoggerDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteLoggerDefinitionInput";
export * from "../types/DeleteLoggerDefinitionOutput";
export * from "../types/DeleteLoggerDefinitionExceptionsUnion";

export class DeleteLoggerDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoggerDefinitionInput,
      OutputTypesUnion,
      DeleteLoggerDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLoggerDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoggerDefinitionInput,
    DeleteLoggerDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoggerDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoggerDefinitionInput,
    DeleteLoggerDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLoggerDefinitionInput, DeleteLoggerDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
