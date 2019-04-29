import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVaultNotifications } from "../model/DeleteVaultNotifications";
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
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVaultNotificationsInput,
    DeleteVaultNotificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVaultNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
      model: DeleteVaultNotifications
    };

    return stack.resolve(
      handler<DeleteVaultNotificationsInput, DeleteVaultNotificationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
