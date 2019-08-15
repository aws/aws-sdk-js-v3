import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSchemaCreation } from "../model/operations/StartSchemaCreation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSchemaCreationInput } from "../types/StartSchemaCreationInput";
import { StartSchemaCreationOutput } from "../types/StartSchemaCreationOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/StartSchemaCreationInput";
export * from "../types/StartSchemaCreationOutput";
export * from "../types/StartSchemaCreationExceptionsUnion";

export class StartSchemaCreationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSchemaCreationInput,
      OutputTypesUnion,
      StartSchemaCreationOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = StartSchemaCreation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSchemaCreationInput,
    StartSchemaCreationOutput,
    Blob
  >();

  constructor(readonly input: StartSchemaCreationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartSchemaCreationInput,
    StartSchemaCreationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartSchemaCreationInput, StartSchemaCreationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
