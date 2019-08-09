import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUserSettings } from "../model/GetUserSettings";
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
      _stream.Readable
    > {
  readonly model = GetUserSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserSettingsInput,
    GetUserSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUserSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
