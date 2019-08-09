import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVaultNotifications } from "../model/GetVaultNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVaultNotificationsInput } from "../types/GetVaultNotificationsInput";
import { GetVaultNotificationsOutput } from "../types/GetVaultNotificationsOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/GetVaultNotificationsInput";
export * from "../types/GetVaultNotificationsOutput";
export * from "../types/GetVaultNotificationsExceptionsUnion";

export class GetVaultNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVaultNotificationsInput,
      OutputTypesUnion,
      GetVaultNotificationsOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = GetVaultNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVaultNotificationsInput,
    GetVaultNotificationsOutput,
    Blob
  >();

  constructor(readonly input: GetVaultNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetVaultNotificationsInput,
    GetVaultNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVaultNotificationsInput, GetVaultNotificationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
