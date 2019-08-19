import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSchemaCreationStatus } from "../model/operations/GetSchemaCreationStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSchemaCreationStatusInput } from "../types/GetSchemaCreationStatusInput";
import { GetSchemaCreationStatusOutput } from "../types/GetSchemaCreationStatusOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/GetSchemaCreationStatusInput";
export * from "../types/GetSchemaCreationStatusOutput";
export * from "../types/GetSchemaCreationStatusExceptionsUnion";

export class GetSchemaCreationStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSchemaCreationStatusInput,
      OutputTypesUnion,
      GetSchemaCreationStatusOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = GetSchemaCreationStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSchemaCreationStatusInput,
    GetSchemaCreationStatusOutput,
    Blob
  >();

  constructor(readonly input: GetSchemaCreationStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSchemaCreationStatusInput,
    GetSchemaCreationStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSchemaCreationStatusInput, GetSchemaCreationStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
