import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteClusterSnapshots } from "../model/BatchDeleteClusterSnapshots";
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
      Blob
    > {
  readonly model = BatchDeleteClusterSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteClusterSnapshotsInput,
    BatchDeleteClusterSnapshotsOutput,
    Blob
  >();

  constructor(readonly input: BatchDeleteClusterSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
