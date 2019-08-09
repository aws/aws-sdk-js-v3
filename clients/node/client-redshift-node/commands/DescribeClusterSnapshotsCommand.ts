import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClusterSnapshots } from "../model/DescribeClusterSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterSnapshotsInput } from "../types/DescribeClusterSnapshotsInput";
import { DescribeClusterSnapshotsOutput } from "../types/DescribeClusterSnapshotsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterSnapshotsInput";
export * from "../types/DescribeClusterSnapshotsOutput";
export * from "../types/DescribeClusterSnapshotsExceptionsUnion";

export class DescribeClusterSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterSnapshotsInput,
      OutputTypesUnion,
      DescribeClusterSnapshotsOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClusterSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterSnapshotsInput,
    DescribeClusterSnapshotsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClusterSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterSnapshotsInput,
    DescribeClusterSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClusterSnapshotsInput, DescribeClusterSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
