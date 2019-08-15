import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateVPCEConfiguration } from "../model/operations/UpdateVPCEConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVPCEConfigurationInput } from "../types/UpdateVPCEConfigurationInput";
import { UpdateVPCEConfigurationOutput } from "../types/UpdateVPCEConfigurationOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/UpdateVPCEConfigurationInput";
export * from "../types/UpdateVPCEConfigurationOutput";
export * from "../types/UpdateVPCEConfigurationExceptionsUnion";

export class UpdateVPCEConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVPCEConfigurationInput,
      OutputTypesUnion,
      UpdateVPCEConfigurationOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateVPCEConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVPCEConfigurationInput,
    UpdateVPCEConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateVPCEConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVPCEConfigurationInput,
    UpdateVPCEConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVPCEConfigurationInput, UpdateVPCEConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
