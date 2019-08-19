import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExportConfigurations } from "../model/operations/ExportConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportConfigurationsInput } from "../types/ExportConfigurationsInput";
import { ExportConfigurationsOutput } from "../types/ExportConfigurationsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/ExportConfigurationsInput";
export * from "../types/ExportConfigurationsOutput";
export * from "../types/ExportConfigurationsExceptionsUnion";

export class ExportConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportConfigurationsInput,
      OutputTypesUnion,
      ExportConfigurationsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExportConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportConfigurationsInput,
    ExportConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExportConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportConfigurationsInput,
    ExportConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExportConfigurationsInput, ExportConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
