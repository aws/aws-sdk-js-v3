import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutMailboxPermissions } from "../model/PutMailboxPermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutMailboxPermissionsInput } from "../types/PutMailboxPermissionsInput";
import { PutMailboxPermissionsOutput } from "../types/PutMailboxPermissionsOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/PutMailboxPermissionsInput";
export * from "../types/PutMailboxPermissionsOutput";
export * from "../types/PutMailboxPermissionsExceptionsUnion";

export class PutMailboxPermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutMailboxPermissionsInput,
      OutputTypesUnion,
      PutMailboxPermissionsOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = PutMailboxPermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutMailboxPermissionsInput,
    PutMailboxPermissionsOutput,
    Blob
  >();

  constructor(readonly input: PutMailboxPermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutMailboxPermissionsInput,
    PutMailboxPermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutMailboxPermissionsInput, PutMailboxPermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
