import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteClusterSnapshot } from "../model/operations/DeleteClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClusterSnapshotInput } from "../types/DeleteClusterSnapshotInput";
import { DeleteClusterSnapshotOutput } from "../types/DeleteClusterSnapshotOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteClusterSnapshotInput";
export * from "../types/DeleteClusterSnapshotOutput";
export * from "../types/DeleteClusterSnapshotExceptionsUnion";

export class DeleteClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClusterSnapshotInput,
      OutputTypesUnion,
      DeleteClusterSnapshotOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClusterSnapshotInput,
    DeleteClusterSnapshotOutput,
    Blob
  >();

  constructor(readonly input: DeleteClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClusterSnapshotInput,
    DeleteClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClusterSnapshotInput, DeleteClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
