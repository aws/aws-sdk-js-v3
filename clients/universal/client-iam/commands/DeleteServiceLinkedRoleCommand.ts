import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteServiceLinkedRole } from "../model/DeleteServiceLinkedRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServiceLinkedRoleInput } from "../types/DeleteServiceLinkedRoleInput";
import { DeleteServiceLinkedRoleOutput } from "../types/DeleteServiceLinkedRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteServiceLinkedRoleInput";
export * from "../types/DeleteServiceLinkedRoleOutput";
export * from "../types/DeleteServiceLinkedRoleExceptionsUnion";

export class DeleteServiceLinkedRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServiceLinkedRoleInput,
      OutputTypesUnion,
      DeleteServiceLinkedRoleOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteServiceLinkedRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServiceLinkedRoleInput,
    DeleteServiceLinkedRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteServiceLinkedRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteServiceLinkedRoleInput,
    DeleteServiceLinkedRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServiceLinkedRoleInput, DeleteServiceLinkedRoleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
