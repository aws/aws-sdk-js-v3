import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLoggerDefinition } from "../model/UpdateLoggerDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLoggerDefinitionInput } from "../types/UpdateLoggerDefinitionInput";
import { UpdateLoggerDefinitionOutput } from "../types/UpdateLoggerDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateLoggerDefinitionInput";
export * from "../types/UpdateLoggerDefinitionOutput";
export * from "../types/UpdateLoggerDefinitionExceptionsUnion";

export class UpdateLoggerDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLoggerDefinitionInput,
      OutputTypesUnion,
      UpdateLoggerDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLoggerDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLoggerDefinitionInput,
    UpdateLoggerDefinitionOutput,
    Blob
  >();

  constructor(readonly input: UpdateLoggerDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLoggerDefinitionInput,
    UpdateLoggerDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLoggerDefinitionInput, UpdateLoggerDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
