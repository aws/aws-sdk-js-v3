import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSnapshotCopyGrants } from "../model/DescribeSnapshotCopyGrants";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSnapshotCopyGrantsInput } from "../types/DescribeSnapshotCopyGrantsInput";
import { DescribeSnapshotCopyGrantsOutput } from "../types/DescribeSnapshotCopyGrantsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeSnapshotCopyGrantsInput";
export * from "../types/DescribeSnapshotCopyGrantsOutput";
export * from "../types/DescribeSnapshotCopyGrantsExceptionsUnion";

export class DescribeSnapshotCopyGrantsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSnapshotCopyGrantsInput,
      OutputTypesUnion,
      DescribeSnapshotCopyGrantsOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSnapshotCopyGrants;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSnapshotCopyGrantsInput,
    DescribeSnapshotCopyGrantsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSnapshotCopyGrantsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSnapshotCopyGrantsInput,
    DescribeSnapshotCopyGrantsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSnapshotCopyGrantsInput,
        DescribeSnapshotCopyGrantsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
