import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBackup } from "../model/DeleteBackup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBackupInput } from "../types/DeleteBackupInput";
import { DeleteBackupOutput } from "../types/DeleteBackupOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/DeleteBackupInput";
export * from "../types/DeleteBackupOutput";
export * from "../types/DeleteBackupExceptionsUnion";

export class DeleteBackupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBackupInput,
      OutputTypesUnion,
      DeleteBackupOutput,
      OpsWorksCMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBackup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBackupInput,
    DeleteBackupOutput,
    Blob
  >();

  constructor(readonly input: DeleteBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBackupInput, DeleteBackupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBackupInput, DeleteBackupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
