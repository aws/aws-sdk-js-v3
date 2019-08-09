import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSchemaCreationStatus } from "../model/GetSchemaCreationStatus";
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
      Uint8Array
    > {
  readonly model = GetSchemaCreationStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSchemaCreationStatusInput,
    GetSchemaCreationStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSchemaCreationStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
