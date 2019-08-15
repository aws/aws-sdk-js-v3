import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDiskSnapshot } from "../model/operations/DeleteDiskSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDiskSnapshotInput } from "../types/DeleteDiskSnapshotInput";
import { DeleteDiskSnapshotOutput } from "../types/DeleteDiskSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteDiskSnapshotInput";
export * from "../types/DeleteDiskSnapshotOutput";
export * from "../types/DeleteDiskSnapshotExceptionsUnion";

export class DeleteDiskSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDiskSnapshotInput,
      OutputTypesUnion,
      DeleteDiskSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDiskSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDiskSnapshotInput,
    DeleteDiskSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDiskSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDiskSnapshotInput,
    DeleteDiskSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDiskSnapshotInput, DeleteDiskSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
