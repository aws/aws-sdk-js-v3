import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSchemaExtension } from "../model/operations/StartSchemaExtension";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSchemaExtensionInput } from "../types/StartSchemaExtensionInput";
import { StartSchemaExtensionOutput } from "../types/StartSchemaExtensionOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/StartSchemaExtensionInput";
export * from "../types/StartSchemaExtensionOutput";
export * from "../types/StartSchemaExtensionExceptionsUnion";

export class StartSchemaExtensionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSchemaExtensionInput,
      OutputTypesUnion,
      StartSchemaExtensionOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = StartSchemaExtension;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSchemaExtensionInput,
    StartSchemaExtensionOutput,
    Blob
  >();

  constructor(readonly input: StartSchemaExtensionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartSchemaExtensionInput,
    StartSchemaExtensionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartSchemaExtensionInput, StartSchemaExtensionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
