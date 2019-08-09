import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifySnapshotCopyRetentionPeriod } from "../model/ModifySnapshotCopyRetentionPeriod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifySnapshotCopyRetentionPeriodInput } from "../types/ModifySnapshotCopyRetentionPeriodInput";
import { ModifySnapshotCopyRetentionPeriodOutput } from "../types/ModifySnapshotCopyRetentionPeriodOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifySnapshotCopyRetentionPeriodInput";
export * from "../types/ModifySnapshotCopyRetentionPeriodOutput";
export * from "../types/ModifySnapshotCopyRetentionPeriodExceptionsUnion";

export class ModifySnapshotCopyRetentionPeriodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifySnapshotCopyRetentionPeriodInput,
      OutputTypesUnion,
      ModifySnapshotCopyRetentionPeriodOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = ModifySnapshotCopyRetentionPeriod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifySnapshotCopyRetentionPeriodInput,
    ModifySnapshotCopyRetentionPeriodOutput,
    Blob
  >();

  constructor(readonly input: ModifySnapshotCopyRetentionPeriodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifySnapshotCopyRetentionPeriodInput,
    ModifySnapshotCopyRetentionPeriodOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifySnapshotCopyRetentionPeriodInput,
        ModifySnapshotCopyRetentionPeriodOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
