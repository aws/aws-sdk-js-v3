import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVaultNotifications } from "../model/operations/DeleteVaultNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVaultNotificationsInput } from "../types/DeleteVaultNotificationsInput";
import { DeleteVaultNotificationsOutput } from "../types/DeleteVaultNotificationsOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/DeleteVaultNotificationsInput";
export * from "../types/DeleteVaultNotificationsOutput";
export * from "../types/DeleteVaultNotificationsExceptionsUnion";

export class DeleteVaultNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVaultNotificationsInput,
      OutputTypesUnion,
      DeleteVaultNotificationsOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVaultNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVaultNotificationsInput,
    DeleteVaultNotificationsOutput,
    Blob
  >();

  constructor(readonly input: DeleteVaultNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVaultNotificationsInput,
    DeleteVaultNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVaultNotificationsInput, DeleteVaultNotificationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
