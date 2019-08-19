import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDataSources } from "../model/operations/DescribeDataSources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDataSourcesInput } from "../types/DescribeDataSourcesInput";
import { DescribeDataSourcesOutput } from "../types/DescribeDataSourcesOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/DescribeDataSourcesInput";
export * from "../types/DescribeDataSourcesOutput";
export * from "../types/DescribeDataSourcesExceptionsUnion";

export class DescribeDataSourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDataSourcesInput,
      OutputTypesUnion,
      DescribeDataSourcesOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDataSources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDataSourcesInput,
    DescribeDataSourcesOutput,
    Blob
  >();

  constructor(readonly input: DescribeDataSourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDataSourcesInput,
    DescribeDataSourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDataSourcesInput, DescribeDataSourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
