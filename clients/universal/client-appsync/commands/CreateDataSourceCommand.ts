import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDataSource } from "../model/CreateDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDataSourceInput } from "../types/CreateDataSourceInput";
import { CreateDataSourceOutput } from "../types/CreateDataSourceOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/CreateDataSourceInput";
export * from "../types/CreateDataSourceOutput";
export * from "../types/CreateDataSourceExceptionsUnion";

export class CreateDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDataSourceInput,
      OutputTypesUnion,
      CreateDataSourceOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDataSourceInput,
    CreateDataSourceOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDataSourceInput, CreateDataSourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDataSourceInput, CreateDataSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
