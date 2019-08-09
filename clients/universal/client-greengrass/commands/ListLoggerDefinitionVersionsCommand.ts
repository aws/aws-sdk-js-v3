import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLoggerDefinitionVersions } from "../model/ListLoggerDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLoggerDefinitionVersionsInput } from "../types/ListLoggerDefinitionVersionsInput";
import { ListLoggerDefinitionVersionsOutput } from "../types/ListLoggerDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListLoggerDefinitionVersionsInput";
export * from "../types/ListLoggerDefinitionVersionsOutput";
export * from "../types/ListLoggerDefinitionVersionsExceptionsUnion";

export class ListLoggerDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLoggerDefinitionVersionsInput,
      OutputTypesUnion,
      ListLoggerDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListLoggerDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLoggerDefinitionVersionsInput,
    ListLoggerDefinitionVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListLoggerDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLoggerDefinitionVersionsInput,
    ListLoggerDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListLoggerDefinitionVersionsInput,
        ListLoggerDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
