import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVPCEConfiguration } from "../model/GetVPCEConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVPCEConfigurationInput } from "../types/GetVPCEConfigurationInput";
import { GetVPCEConfigurationOutput } from "../types/GetVPCEConfigurationOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetVPCEConfigurationInput";
export * from "../types/GetVPCEConfigurationOutput";
export * from "../types/GetVPCEConfigurationExceptionsUnion";

export class GetVPCEConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVPCEConfigurationInput,
      OutputTypesUnion,
      GetVPCEConfigurationOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetVPCEConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVPCEConfigurationInput,
    GetVPCEConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: GetVPCEConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetVPCEConfigurationInput,
    GetVPCEConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVPCEConfigurationInput, GetVPCEConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
