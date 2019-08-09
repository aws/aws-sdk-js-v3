import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelSchemaExtension } from "../model/CancelSchemaExtension";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelSchemaExtensionInput } from "../types/CancelSchemaExtensionInput";
import { CancelSchemaExtensionOutput } from "../types/CancelSchemaExtensionOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CancelSchemaExtensionInput";
export * from "../types/CancelSchemaExtensionOutput";
export * from "../types/CancelSchemaExtensionExceptionsUnion";

export class CancelSchemaExtensionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelSchemaExtensionInput,
      OutputTypesUnion,
      CancelSchemaExtensionOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CancelSchemaExtension;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelSchemaExtensionInput,
    CancelSchemaExtensionOutput,
    Uint8Array
  >();

  constructor(readonly input: CancelSchemaExtensionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelSchemaExtensionInput,
    CancelSchemaExtensionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelSchemaExtensionInput, CancelSchemaExtensionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
