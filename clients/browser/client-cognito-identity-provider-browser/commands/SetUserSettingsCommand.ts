import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetUserSettings } from "../model/SetUserSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetUserSettingsInput } from "../types/SetUserSettingsInput";
import { SetUserSettingsOutput } from "../types/SetUserSettingsOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/SetUserSettingsInput";
export * from "../types/SetUserSettingsOutput";
export * from "../types/SetUserSettingsExceptionsUnion";

export class SetUserSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetUserSettingsInput,
      OutputTypesUnion,
      SetUserSettingsOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = SetUserSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetUserSettingsInput,
    SetUserSettingsOutput,
    Blob
  >();

  constructor(readonly input: SetUserSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<SetUserSettingsInput, SetUserSettingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetUserSettingsInput, SetUserSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
