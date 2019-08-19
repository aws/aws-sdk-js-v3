import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGlobalTableSettings } from "../model/operations/UpdateGlobalTableSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGlobalTableSettingsInput } from "../types/UpdateGlobalTableSettingsInput";
import { UpdateGlobalTableSettingsOutput } from "../types/UpdateGlobalTableSettingsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/UpdateGlobalTableSettingsInput";
export * from "../types/UpdateGlobalTableSettingsOutput";
export * from "../types/UpdateGlobalTableSettingsExceptionsUnion";

export class UpdateGlobalTableSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGlobalTableSettingsInput,
      OutputTypesUnion,
      UpdateGlobalTableSettingsOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGlobalTableSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGlobalTableSettingsInput,
    UpdateGlobalTableSettingsOutput,
    Blob
  >();

  constructor(readonly input: UpdateGlobalTableSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGlobalTableSettingsInput,
    UpdateGlobalTableSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
