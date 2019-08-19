import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateServiceSettings } from "../model/operations/UpdateServiceSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServiceSettingsInput } from "../types/UpdateServiceSettingsInput";
import { UpdateServiceSettingsOutput } from "../types/UpdateServiceSettingsOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/UpdateServiceSettingsInput";
export * from "../types/UpdateServiceSettingsOutput";
export * from "../types/UpdateServiceSettingsExceptionsUnion";

export class UpdateServiceSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServiceSettingsInput,
      OutputTypesUnion,
      UpdateServiceSettingsOutput,
      LicenseManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateServiceSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServiceSettingsInput,
    UpdateServiceSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateServiceSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServiceSettingsInput,
    UpdateServiceSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateServiceSettingsInput, UpdateServiceSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
