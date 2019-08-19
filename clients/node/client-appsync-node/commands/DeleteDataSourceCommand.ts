import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDataSource } from "../model/operations/DeleteDataSource";
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
      _stream.Readable
    > {
  readonly model = DeleteDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDataSourceInput,
    DeleteDataSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
