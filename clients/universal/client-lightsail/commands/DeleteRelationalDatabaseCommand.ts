import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRelationalDatabase } from "../model/DeleteRelationalDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRelationalDatabaseInput } from "../types/DeleteRelationalDatabaseInput";
import { DeleteRelationalDatabaseOutput } from "../types/DeleteRelationalDatabaseOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteRelationalDatabaseInput";
export * from "../types/DeleteRelationalDatabaseOutput";
export * from "../types/DeleteRelationalDatabaseExceptionsUnion";

export class DeleteRelationalDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRelationalDatabaseInput,
      OutputTypesUnion,
      DeleteRelationalDatabaseOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteRelationalDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRelationalDatabaseInput,
    DeleteRelationalDatabaseOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteRelationalDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRelationalDatabaseInput,
    DeleteRelationalDatabaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRelationalDatabaseInput, DeleteRelationalDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
