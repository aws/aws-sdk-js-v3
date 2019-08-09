import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApplicationSnapshot } from "../model/DeleteApplicationSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationSnapshotInput } from "../types/DeleteApplicationSnapshotInput";
import { DeleteApplicationSnapshotOutput } from "../types/DeleteApplicationSnapshotOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/DeleteApplicationSnapshotInput";
export * from "../types/DeleteApplicationSnapshotOutput";
export * from "../types/DeleteApplicationSnapshotExceptionsUnion";

export class DeleteApplicationSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationSnapshotInput,
      OutputTypesUnion,
      DeleteApplicationSnapshotOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApplicationSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationSnapshotInput,
    DeleteApplicationSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApplicationSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationSnapshotInput,
    DeleteApplicationSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApplicationSnapshotInput, DeleteApplicationSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
