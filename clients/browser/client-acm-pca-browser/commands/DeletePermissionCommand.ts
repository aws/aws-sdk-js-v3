import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePermission } from "../model/operations/DeletePermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePermissionInput } from "../types/DeletePermissionInput";
import { DeletePermissionOutput } from "../types/DeletePermissionOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/DeletePermissionInput";
export * from "../types/DeletePermissionOutput";
export * from "../types/DeletePermissionExceptionsUnion";

export class DeletePermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePermissionInput,
      OutputTypesUnion,
      DeletePermissionOutput,
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePermissionInput,
    DeletePermissionOutput,
    Blob
  >();

  constructor(readonly input: DeletePermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePermissionInput, DeletePermissionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePermissionInput, DeletePermissionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
