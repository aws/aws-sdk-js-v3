import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExportClientVpnClientConfiguration } from "../model/operations/ExportClientVpnClientConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportClientVpnClientConfigurationInput } from "../types/ExportClientVpnClientConfigurationInput";
import { ExportClientVpnClientConfigurationOutput } from "../types/ExportClientVpnClientConfigurationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ExportClientVpnClientConfigurationInput";
export * from "../types/ExportClientVpnClientConfigurationOutput";
export * from "../types/ExportClientVpnClientConfigurationExceptionsUnion";

export class ExportClientVpnClientConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportClientVpnClientConfigurationInput,
      OutputTypesUnion,
      ExportClientVpnClientConfigurationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ExportClientVpnClientConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportClientVpnClientConfigurationInput,
    ExportClientVpnClientConfigurationOutput,
    Blob
  >();

  constructor(readonly input: ExportClientVpnClientConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportClientVpnClientConfigurationInput,
    ExportClientVpnClientConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExportClientVpnClientConfigurationInput,
        ExportClientVpnClientConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
