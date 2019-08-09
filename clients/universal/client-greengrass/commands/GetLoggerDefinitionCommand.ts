import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLoggerDefinition } from "../model/GetLoggerDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoggerDefinitionInput } from "../types/GetLoggerDefinitionInput";
import { GetLoggerDefinitionOutput } from "../types/GetLoggerDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetLoggerDefinitionInput";
export * from "../types/GetLoggerDefinitionOutput";
export * from "../types/GetLoggerDefinitionExceptionsUnion";

export class GetLoggerDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoggerDefinitionInput,
      OutputTypesUnion,
      GetLoggerDefinitionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLoggerDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoggerDefinitionInput,
    GetLoggerDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLoggerDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLoggerDefinitionInput,
    GetLoggerDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoggerDefinitionInput, GetLoggerDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
