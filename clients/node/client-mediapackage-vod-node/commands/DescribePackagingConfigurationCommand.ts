import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePackagingConfiguration } from "../model/DescribePackagingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePackagingConfigurationInput } from "../types/DescribePackagingConfigurationInput";
import { DescribePackagingConfigurationOutput } from "../types/DescribePackagingConfigurationOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/DescribePackagingConfigurationInput";
export * from "../types/DescribePackagingConfigurationOutput";
export * from "../types/DescribePackagingConfigurationExceptionsUnion";

export class DescribePackagingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePackagingConfigurationInput,
      OutputTypesUnion,
      DescribePackagingConfigurationOutput,
      MediaPackageVodResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePackagingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePackagingConfigurationInput,
    DescribePackagingConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePackagingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePackagingConfigurationInput,
    DescribePackagingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribePackagingConfigurationInput,
        DescribePackagingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
