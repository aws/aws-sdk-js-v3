import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSchemaExtensions } from "../model/operations/ListSchemaExtensions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSchemaExtensionsInput } from "../types/ListSchemaExtensionsInput";
import { ListSchemaExtensionsOutput } from "../types/ListSchemaExtensionsOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/ListSchemaExtensionsInput";
export * from "../types/ListSchemaExtensionsOutput";
export * from "../types/ListSchemaExtensionsExceptionsUnion";

export class ListSchemaExtensionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSchemaExtensionsInput,
      OutputTypesUnion,
      ListSchemaExtensionsOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ListSchemaExtensions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSchemaExtensionsInput,
    ListSchemaExtensionsOutput,
    Blob
  >();

  constructor(readonly input: ListSchemaExtensionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSchemaExtensionsInput,
    ListSchemaExtensionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSchemaExtensionsInput, ListSchemaExtensionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
