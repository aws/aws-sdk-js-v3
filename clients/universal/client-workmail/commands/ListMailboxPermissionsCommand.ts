import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMailboxPermissions } from "../model/ListMailboxPermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMailboxPermissionsInput } from "../types/ListMailboxPermissionsInput";
import { ListMailboxPermissionsOutput } from "../types/ListMailboxPermissionsOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/ListMailboxPermissionsInput";
export * from "../types/ListMailboxPermissionsOutput";
export * from "../types/ListMailboxPermissionsExceptionsUnion";

export class ListMailboxPermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMailboxPermissionsInput,
      OutputTypesUnion,
      ListMailboxPermissionsOutput,
      WorkMailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMailboxPermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMailboxPermissionsInput,
    ListMailboxPermissionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMailboxPermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListMailboxPermissionsInput,
    ListMailboxPermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMailboxPermissionsInput, ListMailboxPermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
