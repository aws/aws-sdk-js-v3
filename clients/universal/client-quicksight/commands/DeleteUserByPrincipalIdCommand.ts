import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUserByPrincipalId } from "../model/DeleteUserByPrincipalId";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserByPrincipalIdInput } from "../types/DeleteUserByPrincipalIdInput";
import { DeleteUserByPrincipalIdOutput } from "../types/DeleteUserByPrincipalIdOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/DeleteUserByPrincipalIdInput";
export * from "../types/DeleteUserByPrincipalIdOutput";
export * from "../types/DeleteUserByPrincipalIdExceptionsUnion";

export class DeleteUserByPrincipalIdCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserByPrincipalIdInput,
      OutputTypesUnion,
      DeleteUserByPrincipalIdOutput,
      QuickSightResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteUserByPrincipalId;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserByPrincipalIdInput,
    DeleteUserByPrincipalIdOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteUserByPrincipalIdInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUserByPrincipalIdInput,
    DeleteUserByPrincipalIdOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserByPrincipalIdInput, DeleteUserByPrincipalIdOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
