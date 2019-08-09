import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchModifyClusterSnapshots } from "../model/BatchModifyClusterSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchModifyClusterSnapshotsInput } from "../types/BatchModifyClusterSnapshotsInput";
import { BatchModifyClusterSnapshotsOutput } from "../types/BatchModifyClusterSnapshotsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/BatchModifyClusterSnapshotsInput";
export * from "../types/BatchModifyClusterSnapshotsOutput";
export * from "../types/BatchModifyClusterSnapshotsExceptionsUnion";

export class BatchModifyClusterSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchModifyClusterSnapshotsInput,
      OutputTypesUnion,
      BatchModifyClusterSnapshotsOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchModifyClusterSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchModifyClusterSnapshotsInput,
    BatchModifyClusterSnapshotsOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchModifyClusterSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchModifyClusterSnapshotsInput,
    BatchModifyClusterSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchModifyClusterSnapshotsInput,
        BatchModifyClusterSnapshotsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
