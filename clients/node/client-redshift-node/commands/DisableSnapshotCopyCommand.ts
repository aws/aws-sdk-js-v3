import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableSnapshotCopy } from "../model/operations/DisableSnapshotCopy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableSnapshotCopyInput } from "../types/DisableSnapshotCopyInput";
import { DisableSnapshotCopyOutput } from "../types/DisableSnapshotCopyOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DisableSnapshotCopyInput";
export * from "../types/DisableSnapshotCopyOutput";
export * from "../types/DisableSnapshotCopyExceptionsUnion";

export class DisableSnapshotCopyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableSnapshotCopyInput,
      OutputTypesUnion,
      DisableSnapshotCopyOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableSnapshotCopy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableSnapshotCopyInput,
    DisableSnapshotCopyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableSnapshotCopyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableSnapshotCopyInput,
    DisableSnapshotCopyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableSnapshotCopyInput, DisableSnapshotCopyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
