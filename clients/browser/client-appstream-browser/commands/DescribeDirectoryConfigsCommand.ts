import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDirectoryConfigs } from "../model/DescribeDirectoryConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDirectoryConfigsInput } from "../types/DescribeDirectoryConfigsInput";
import { DescribeDirectoryConfigsOutput } from "../types/DescribeDirectoryConfigsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeDirectoryConfigsInput";
export * from "../types/DescribeDirectoryConfigsOutput";
export * from "../types/DescribeDirectoryConfigsExceptionsUnion";

export class DescribeDirectoryConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDirectoryConfigsInput,
      OutputTypesUnion,
      DescribeDirectoryConfigsOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDirectoryConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDirectoryConfigsInput,
    DescribeDirectoryConfigsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDirectoryConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDirectoryConfigsInput,
    DescribeDirectoryConfigsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDirectoryConfigsInput, DescribeDirectoryConfigsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
