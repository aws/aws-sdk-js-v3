import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDatabase } from "../model/DeleteDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDatabaseInput } from "../types/DeleteDatabaseInput";
import { DeleteDatabaseOutput } from "../types/DeleteDatabaseOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteDatabaseInput";
export * from "../types/DeleteDatabaseOutput";
export * from "../types/DeleteDatabaseExceptionsUnion";

export class DeleteDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDatabaseInput,
      OutputTypesUnion,
      DeleteDatabaseOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDatabaseInput,
    DeleteDatabaseOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDatabaseInput, DeleteDatabaseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDatabaseInput, DeleteDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
