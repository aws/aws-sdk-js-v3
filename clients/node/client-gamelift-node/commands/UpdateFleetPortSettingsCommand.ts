import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFleetPortSettings } from "../model/UpdateFleetPortSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFleetPortSettingsInput } from "../types/UpdateFleetPortSettingsInput";
import { UpdateFleetPortSettingsOutput } from "../types/UpdateFleetPortSettingsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateFleetPortSettingsInput";
export * from "../types/UpdateFleetPortSettingsOutput";
export * from "../types/UpdateFleetPortSettingsExceptionsUnion";

export class UpdateFleetPortSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFleetPortSettingsInput,
      OutputTypesUnion,
      UpdateFleetPortSettingsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFleetPortSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFleetPortSettingsInput,
    UpdateFleetPortSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFleetPortSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFleetPortSettingsInput,
    UpdateFleetPortSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
