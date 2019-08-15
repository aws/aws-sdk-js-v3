import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAccountSettings } from "../model/operations/UpdateAccountSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAccountSettingsInput } from "../types/UpdateAccountSettingsInput";
import { UpdateAccountSettingsOutput } from "../types/UpdateAccountSettingsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdateAccountSettingsInput";
export * from "../types/UpdateAccountSettingsOutput";
export * from "../types/UpdateAccountSettingsExceptionsUnion";

export class UpdateAccountSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAccountSettingsInput,
      OutputTypesUnion,
      UpdateAccountSettingsOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAccountSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAccountSettingsInput,
    UpdateAccountSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAccountSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAccountSettingsInput,
    UpdateAccountSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAccountSettingsInput, UpdateAccountSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
