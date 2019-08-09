import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBClusterSnapshots } from "../model/DescribeDBClusterSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterSnapshotsInput } from "../types/DescribeDBClusterSnapshotsInput";
import { DescribeDBClusterSnapshotsOutput } from "../types/DescribeDBClusterSnapshotsOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DescribeDBClusterSnapshotsInput";
export * from "../types/DescribeDBClusterSnapshotsOutput";
export * from "../types/DescribeDBClusterSnapshotsExceptionsUnion";

export class DescribeDBClusterSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClusterSnapshotsInput,
      OutputTypesUnion,
      DescribeDBClusterSnapshotsOutput,
      DocDBResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBClusterSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterSnapshotsInput,
    DescribeDBClusterSnapshotsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBClusterSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClusterSnapshotsInput,
    DescribeDBClusterSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBClusterSnapshotsInput,
        DescribeDBClusterSnapshotsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
