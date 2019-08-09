import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBClusterSnapshot } from "../model/DeleteDBClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBClusterSnapshotInput } from "../types/DeleteDBClusterSnapshotInput";
import { DeleteDBClusterSnapshotOutput } from "../types/DeleteDBClusterSnapshotOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DeleteDBClusterSnapshotInput";
export * from "../types/DeleteDBClusterSnapshotOutput";
export * from "../types/DeleteDBClusterSnapshotExceptionsUnion";

export class DeleteDBClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBClusterSnapshotInput,
      OutputTypesUnion,
      DeleteDBClusterSnapshotOutput,
      NeptuneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDBClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterSnapshotInput,
    DeleteDBClusterSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDBClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBClusterSnapshotInput,
    DeleteDBClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBClusterSnapshotInput, DeleteDBClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
