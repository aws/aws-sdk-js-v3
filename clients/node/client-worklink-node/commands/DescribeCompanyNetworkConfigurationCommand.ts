import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCompanyNetworkConfiguration } from "../model/operations/DescribeCompanyNetworkConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCompanyNetworkConfigurationInput } from "../types/DescribeCompanyNetworkConfigurationInput";
import { DescribeCompanyNetworkConfigurationOutput } from "../types/DescribeCompanyNetworkConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeCompanyNetworkConfigurationInput";
export * from "../types/DescribeCompanyNetworkConfigurationOutput";
export * from "../types/DescribeCompanyNetworkConfigurationExceptionsUnion";

export class DescribeCompanyNetworkConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCompanyNetworkConfigurationInput,
      OutputTypesUnion,
      DescribeCompanyNetworkConfigurationOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCompanyNetworkConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCompanyNetworkConfigurationInput,
    DescribeCompanyNetworkConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCompanyNetworkConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCompanyNetworkConfigurationInput,
    DescribeCompanyNetworkConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCompanyNetworkConfigurationInput,
        DescribeCompanyNetworkConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
