import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBClusterSnapshots } from "../model/DescribeDBClusterSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterSnapshotsInput } from "../types/DescribeDBClusterSnapshotsInput";
import { DescribeDBClusterSnapshotsOutput } from "../types/DescribeDBClusterSnapshotsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
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
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBClusterSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterSnapshotsInput,
    DescribeDBClusterSnapshotsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBClusterSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
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
