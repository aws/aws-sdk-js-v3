import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVPCEConfiguration } from "../model/DeleteVPCEConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVPCEConfigurationInput } from "../types/DeleteVPCEConfigurationInput";
import { DeleteVPCEConfigurationOutput } from "../types/DeleteVPCEConfigurationOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/DeleteVPCEConfigurationInput";
export * from "../types/DeleteVPCEConfigurationOutput";
export * from "../types/DeleteVPCEConfigurationExceptionsUnion";

export class DeleteVPCEConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVPCEConfigurationInput,
      OutputTypesUnion,
      DeleteVPCEConfigurationOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVPCEConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVPCEConfigurationInput,
    DeleteVPCEConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVPCEConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVPCEConfigurationInput,
    DeleteVPCEConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVPCEConfigurationInput, DeleteVPCEConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
