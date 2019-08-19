import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRecoveryPoint } from "../model/operations/DeleteRecoveryPoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRecoveryPointInput } from "../types/DeleteRecoveryPointInput";
import { DeleteRecoveryPointOutput } from "../types/DeleteRecoveryPointOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DeleteRecoveryPointInput";
export * from "../types/DeleteRecoveryPointOutput";
export * from "../types/DeleteRecoveryPointExceptionsUnion";

export class DeleteRecoveryPointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRecoveryPointInput,
      OutputTypesUnion,
      DeleteRecoveryPointOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRecoveryPoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRecoveryPointInput,
    DeleteRecoveryPointOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRecoveryPointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRecoveryPointInput,
    DeleteRecoveryPointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRecoveryPointInput, DeleteRecoveryPointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
