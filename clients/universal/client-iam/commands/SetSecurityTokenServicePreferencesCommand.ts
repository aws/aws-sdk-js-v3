import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetSecurityTokenServicePreferences } from "../model/SetSecurityTokenServicePreferences";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetSecurityTokenServicePreferencesInput } from "../types/SetSecurityTokenServicePreferencesInput";
import { SetSecurityTokenServicePreferencesOutput } from "../types/SetSecurityTokenServicePreferencesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/SetSecurityTokenServicePreferencesInput";
export * from "../types/SetSecurityTokenServicePreferencesOutput";
export * from "../types/SetSecurityTokenServicePreferencesExceptionsUnion";

export class SetSecurityTokenServicePreferencesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetSecurityTokenServicePreferencesInput,
      OutputTypesUnion,
      SetSecurityTokenServicePreferencesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetSecurityTokenServicePreferences;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetSecurityTokenServicePreferencesInput,
    SetSecurityTokenServicePreferencesOutput,
    Uint8Array
  >();

  constructor(readonly input: SetSecurityTokenServicePreferencesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetSecurityTokenServicePreferencesInput,
    SetSecurityTokenServicePreferencesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetSecurityTokenServicePreferencesInput,
        SetSecurityTokenServicePreferencesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
