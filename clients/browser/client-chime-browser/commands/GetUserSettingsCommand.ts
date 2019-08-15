import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUserSettings } from "../model/operations/GetUserSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserSettingsInput } from "../types/GetUserSettingsInput";
import { GetUserSettingsOutput } from "../types/GetUserSettingsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetUserSettingsInput";
export * from "../types/GetUserSettingsOutput";
export * from "../types/GetUserSettingsExceptionsUnion";

export class GetUserSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserSettingsInput,
      OutputTypesUnion,
      GetUserSettingsOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetUserSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserSettingsInput,
    GetUserSettingsOutput,
    Blob
  >();

  constructor(readonly input: GetUserSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUserSettingsInput, GetUserSettingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUserSettingsInput, GetUserSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
