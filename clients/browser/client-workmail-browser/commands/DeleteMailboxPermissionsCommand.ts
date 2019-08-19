import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMailboxPermissions } from "../model/operations/DeleteMailboxPermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMailboxPermissionsInput } from "../types/DeleteMailboxPermissionsInput";
import { DeleteMailboxPermissionsOutput } from "../types/DeleteMailboxPermissionsOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DeleteMailboxPermissionsInput";
export * from "../types/DeleteMailboxPermissionsOutput";
export * from "../types/DeleteMailboxPermissionsExceptionsUnion";

export class DeleteMailboxPermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMailboxPermissionsInput,
      OutputTypesUnion,
      DeleteMailboxPermissionsOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMailboxPermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMailboxPermissionsInput,
    DeleteMailboxPermissionsOutput,
    Blob
  >();

  constructor(readonly input: DeleteMailboxPermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMailboxPermissionsInput,
    DeleteMailboxPermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMailboxPermissionsInput, DeleteMailboxPermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
