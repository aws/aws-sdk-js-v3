import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRole } from "../model/DeleteRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRoleInput } from "../types/DeleteRoleInput";
import { DeleteRoleOutput } from "../types/DeleteRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteRoleInput";
export * from "../types/DeleteRoleOutput";
export * from "../types/DeleteRoleExceptionsUnion";

export class DeleteRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRoleInput,
      OutputTypesUnion,
      DeleteRoleOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRoleInput,
    DeleteRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRoleInput, DeleteRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRoleInput, DeleteRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
