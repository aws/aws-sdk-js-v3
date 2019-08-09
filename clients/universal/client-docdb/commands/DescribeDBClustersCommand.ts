import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBClusters } from "../model/DescribeDBClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClustersInput } from "../types/DescribeDBClustersInput";
import { DescribeDBClustersOutput } from "../types/DescribeDBClustersOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DescribeDBClustersInput";
export * from "../types/DescribeDBClustersOutput";
export * from "../types/DescribeDBClustersExceptionsUnion";

export class DescribeDBClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClustersInput,
      OutputTypesUnion,
      DescribeDBClustersOutput,
      DocDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDBClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClustersInput,
    DescribeDBClustersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDBClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClustersInput,
    DescribeDBClustersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBClustersInput, DescribeDBClustersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
