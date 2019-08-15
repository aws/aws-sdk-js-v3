import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEmergencyContactSettings } from "../model/operations/UpdateEmergencyContactSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEmergencyContactSettingsInput } from "../types/UpdateEmergencyContactSettingsInput";
import { UpdateEmergencyContactSettingsOutput } from "../types/UpdateEmergencyContactSettingsOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/UpdateEmergencyContactSettingsInput";
export * from "../types/UpdateEmergencyContactSettingsOutput";
export * from "../types/UpdateEmergencyContactSettingsExceptionsUnion";

export class UpdateEmergencyContactSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEmergencyContactSettingsInput,
      OutputTypesUnion,
      UpdateEmergencyContactSettingsOutput,
      ShieldResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateEmergencyContactSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEmergencyContactSettingsInput,
    UpdateEmergencyContactSettingsOutput,
    Blob
  >();

  constructor(readonly input: UpdateEmergencyContactSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEmergencyContactSettingsInput,
    UpdateEmergencyContactSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateEmergencyContactSettingsInput,
        UpdateEmergencyContactSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
