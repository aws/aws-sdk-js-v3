import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVPCEConfiguration } from "../model/CreateVPCEConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVPCEConfigurationInput } from "../types/CreateVPCEConfigurationInput";
import { CreateVPCEConfigurationOutput } from "../types/CreateVPCEConfigurationOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/CreateVPCEConfigurationInput";
export * from "../types/CreateVPCEConfigurationOutput";
export * from "../types/CreateVPCEConfigurationExceptionsUnion";

export class CreateVPCEConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVPCEConfigurationInput,
      OutputTypesUnion,
      CreateVPCEConfigurationOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVPCEConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVPCEConfigurationInput,
    CreateVPCEConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVPCEConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVPCEConfigurationInput,
    CreateVPCEConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVPCEConfigurationInput, CreateVPCEConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
