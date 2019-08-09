import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInstanceSnapshot } from "../model/DeleteInstanceSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInstanceSnapshotInput } from "../types/DeleteInstanceSnapshotInput";
import { DeleteInstanceSnapshotOutput } from "../types/DeleteInstanceSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteInstanceSnapshotInput";
export * from "../types/DeleteInstanceSnapshotOutput";
export * from "../types/DeleteInstanceSnapshotExceptionsUnion";

export class DeleteInstanceSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInstanceSnapshotInput,
      OutputTypesUnion,
      DeleteInstanceSnapshotOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteInstanceSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInstanceSnapshotInput,
    DeleteInstanceSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteInstanceSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteInstanceSnapshotInput,
    DeleteInstanceSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInstanceSnapshotInput, DeleteInstanceSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
