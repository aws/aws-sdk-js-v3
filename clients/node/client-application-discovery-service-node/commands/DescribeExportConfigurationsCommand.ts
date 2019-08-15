import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeExportConfigurations } from "../model/operations/DescribeExportConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeExportConfigurationsInput } from "../types/DescribeExportConfigurationsInput";
import { DescribeExportConfigurationsOutput } from "../types/DescribeExportConfigurationsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DescribeExportConfigurationsInput";
export * from "../types/DescribeExportConfigurationsOutput";
export * from "../types/DescribeExportConfigurationsExceptionsUnion";

export class DescribeExportConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeExportConfigurationsInput,
      OutputTypesUnion,
      DescribeExportConfigurationsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeExportConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeExportConfigurationsInput,
    DescribeExportConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeExportConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeExportConfigurationsInput,
    DescribeExportConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeExportConfigurationsInput,
        DescribeExportConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
