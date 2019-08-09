import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGlobalSettings } from "../model/GetGlobalSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGlobalSettingsInput } from "../types/GetGlobalSettingsInput";
import { GetGlobalSettingsOutput } from "../types/GetGlobalSettingsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetGlobalSettingsInput";
export * from "../types/GetGlobalSettingsOutput";
export * from "../types/GetGlobalSettingsExceptionsUnion";

export class GetGlobalSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGlobalSettingsInput,
      OutputTypesUnion,
      GetGlobalSettingsOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetGlobalSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGlobalSettingsInput,
    GetGlobalSettingsOutput,
    Blob
  >();

  constructor(readonly input: GetGlobalSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGlobalSettingsInput, GetGlobalSettingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGlobalSettingsInput, GetGlobalSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
