import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDataSource } from "../model/GetDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDataSourceInput } from "../types/GetDataSourceInput";
import { GetDataSourceOutput } from "../types/GetDataSourceOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/GetDataSourceInput";
export * from "../types/GetDataSourceOutput";
export * from "../types/GetDataSourceExceptionsUnion";

export class GetDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDataSourceInput,
      OutputTypesUnion,
      GetDataSourceOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = GetDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDataSourceInput,
    GetDataSourceOutput,
    Blob
  >();

  constructor(readonly input: GetDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDataSourceInput, GetDataSourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDataSourceInput, GetDataSourceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
