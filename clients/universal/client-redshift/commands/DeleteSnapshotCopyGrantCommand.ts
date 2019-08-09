import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSnapshotCopyGrant } from "../model/DeleteSnapshotCopyGrant";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSnapshotCopyGrantInput } from "../types/DeleteSnapshotCopyGrantInput";
import { DeleteSnapshotCopyGrantOutput } from "../types/DeleteSnapshotCopyGrantOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteSnapshotCopyGrantInput";
export * from "../types/DeleteSnapshotCopyGrantOutput";
export * from "../types/DeleteSnapshotCopyGrantExceptionsUnion";

export class DeleteSnapshotCopyGrantCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSnapshotCopyGrantInput,
      OutputTypesUnion,
      DeleteSnapshotCopyGrantOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSnapshotCopyGrant;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSnapshotCopyGrantInput,
    DeleteSnapshotCopyGrantOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSnapshotCopyGrantInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSnapshotCopyGrantInput,
    DeleteSnapshotCopyGrantOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSnapshotCopyGrantInput, DeleteSnapshotCopyGrantOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
