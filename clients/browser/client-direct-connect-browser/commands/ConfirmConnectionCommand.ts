import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmConnection } from "../model/operations/ConfirmConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmConnectionInput } from "../types/ConfirmConnectionInput";
import { ConfirmConnectionOutput } from "../types/ConfirmConnectionOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/ConfirmConnectionInput";
export * from "../types/ConfirmConnectionOutput";
export * from "../types/ConfirmConnectionExceptionsUnion";

export class ConfirmConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmConnectionInput,
      OutputTypesUnion,
      ConfirmConnectionOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = ConfirmConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmConnectionInput,
    ConfirmConnectionOutput,
    Blob
  >();

  constructor(readonly input: ConfirmConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<ConfirmConnectionInput, ConfirmConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConfirmConnectionInput, ConfirmConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
