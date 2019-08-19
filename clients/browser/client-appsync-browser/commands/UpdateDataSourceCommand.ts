import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDataSource } from "../model/operations/UpdateDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDataSourceInput } from "../types/UpdateDataSourceInput";
import { UpdateDataSourceOutput } from "../types/UpdateDataSourceOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/UpdateDataSourceInput";
export * from "../types/UpdateDataSourceOutput";
export * from "../types/UpdateDataSourceExceptionsUnion";

export class UpdateDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDataSourceInput,
      OutputTypesUnion,
      UpdateDataSourceOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDataSourceInput,
    UpdateDataSourceOutput,
    Blob
  >();

  constructor(readonly input: UpdateDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDataSourceInput, UpdateDataSourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDataSourceInput, UpdateDataSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
