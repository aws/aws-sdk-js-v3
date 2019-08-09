import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = DeleteDBClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterSnapshotInput,
    DeleteDBClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDBClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
