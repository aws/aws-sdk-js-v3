import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableSnapshotCopy } from "../model/operations/EnableSnapshotCopy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableSnapshotCopyInput } from "../types/EnableSnapshotCopyInput";
import { EnableSnapshotCopyOutput } from "../types/EnableSnapshotCopyOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/EnableSnapshotCopyInput";
export * from "../types/EnableSnapshotCopyOutput";
export * from "../types/EnableSnapshotCopyExceptionsUnion";

export class EnableSnapshotCopyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableSnapshotCopyInput,
      OutputTypesUnion,
      EnableSnapshotCopyOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableSnapshotCopy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableSnapshotCopyInput,
    EnableSnapshotCopyOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableSnapshotCopyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableSnapshotCopyInput,
    EnableSnapshotCopyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableSnapshotCopyInput, EnableSnapshotCopyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
