import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDeleteClusterSnapshots } from "../model/operations/BatchDeleteClusterSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteClusterSnapshotsInput } from "../types/BatchDeleteClusterSnapshotsInput";
import { BatchDeleteClusterSnapshotsOutput } from "../types/BatchDeleteClusterSnapshotsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/BatchDeleteClusterSnapshotsInput";
export * from "../types/BatchDeleteClusterSnapshotsOutput";
export * from "../types/BatchDeleteClusterSnapshotsExceptionsUnion";

export class BatchDeleteClusterSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteClusterSnapshotsInput,
      OutputTypesUnion,
      BatchDeleteClusterSnapshotsOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDeleteClusterSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteClusterSnapshotsInput,
    BatchDeleteClusterSnapshotsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDeleteClusterSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeleteClusterSnapshotsInput,
    BatchDeleteClusterSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDeleteClusterSnapshotsInput,
        BatchDeleteClusterSnapshotsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
