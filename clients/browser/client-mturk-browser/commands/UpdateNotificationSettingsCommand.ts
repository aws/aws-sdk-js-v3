import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateNotificationSettings } from "../model/operations/UpdateNotificationSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNotificationSettingsInput } from "../types/UpdateNotificationSettingsInput";
import { UpdateNotificationSettingsOutput } from "../types/UpdateNotificationSettingsOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/UpdateNotificationSettingsInput";
export * from "../types/UpdateNotificationSettingsOutput";
export * from "../types/UpdateNotificationSettingsExceptionsUnion";

export class UpdateNotificationSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNotificationSettingsInput,
      OutputTypesUnion,
      UpdateNotificationSettingsOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateNotificationSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNotificationSettingsInput,
    UpdateNotificationSettingsOutput,
    Blob
  >();

  constructor(readonly input: UpdateNotificationSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNotificationSettingsInput,
    UpdateNotificationSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateNotificationSettingsInput,
        UpdateNotificationSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
