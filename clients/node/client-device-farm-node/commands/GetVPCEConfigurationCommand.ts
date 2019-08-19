import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetVPCEConfiguration } from "../model/operations/GetVPCEConfiguration";
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
      _stream.Readable
    > {
  readonly model = GetVPCEConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVPCEConfigurationInput,
    GetVPCEConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetVPCEConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
