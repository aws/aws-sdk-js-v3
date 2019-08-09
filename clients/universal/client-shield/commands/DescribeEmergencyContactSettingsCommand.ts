import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEmergencyContactSettings } from "../model/DescribeEmergencyContactSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEmergencyContactSettingsInput } from "../types/DescribeEmergencyContactSettingsInput";
import { DescribeEmergencyContactSettingsOutput } from "../types/DescribeEmergencyContactSettingsOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DescribeEmergencyContactSettingsInput";
export * from "../types/DescribeEmergencyContactSettingsOutput";
export * from "../types/DescribeEmergencyContactSettingsExceptionsUnion";

export class DescribeEmergencyContactSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEmergencyContactSettingsInput,
      OutputTypesUnion,
      DescribeEmergencyContactSettingsOutput,
      ShieldResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEmergencyContactSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEmergencyContactSettingsInput,
    DescribeEmergencyContactSettingsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEmergencyContactSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEmergencyContactSettingsInput,
    DescribeEmergencyContactSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEmergencyContactSettingsInput,
        DescribeEmergencyContactSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
