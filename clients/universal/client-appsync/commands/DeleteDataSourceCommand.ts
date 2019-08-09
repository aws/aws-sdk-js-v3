import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDataSource } from "../model/DeleteDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDataSourceInput } from "../types/DeleteDataSourceInput";
import { DeleteDataSourceOutput } from "../types/DeleteDataSourceOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/DeleteDataSourceInput";
export * from "../types/DeleteDataSourceOutput";
export * from "../types/DeleteDataSourceExceptionsUnion";

export class DeleteDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDataSourceInput,
      OutputTypesUnion,
      DeleteDataSourceOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDataSourceInput,
    DeleteDataSourceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDataSourceInput, DeleteDataSourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDataSourceInput, DeleteDataSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
