import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBSnapshots } from "../model/operations/DescribeDBSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBSnapshotsInput } from "../types/DescribeDBSnapshotsInput";
import { DescribeDBSnapshotsOutput } from "../types/DescribeDBSnapshotsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBSnapshotsInput";
export * from "../types/DescribeDBSnapshotsOutput";
export * from "../types/DescribeDBSnapshotsExceptionsUnion";

export class DescribeDBSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBSnapshotsInput,
      OutputTypesUnion,
      DescribeDBSnapshotsOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBSnapshotsInput,
    DescribeDBSnapshotsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBSnapshotsInput,
    DescribeDBSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBSnapshotsInput, DescribeDBSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
