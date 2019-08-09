import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApplicationSettings } from "../model/GetApplicationSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApplicationSettingsInput } from "../types/GetApplicationSettingsInput";
import { GetApplicationSettingsOutput } from "../types/GetApplicationSettingsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApplicationSettingsInput";
export * from "../types/GetApplicationSettingsOutput";
export * from "../types/GetApplicationSettingsExceptionsUnion";

export class GetApplicationSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApplicationSettingsInput,
      OutputTypesUnion,
      GetApplicationSettingsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApplicationSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApplicationSettingsInput,
    GetApplicationSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApplicationSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApplicationSettingsInput,
    GetApplicationSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApplicationSettingsInput, GetApplicationSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
