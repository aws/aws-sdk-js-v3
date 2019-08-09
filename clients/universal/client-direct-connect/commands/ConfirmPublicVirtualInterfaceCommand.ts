import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmPublicVirtualInterface } from "../model/ConfirmPublicVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmPublicVirtualInterfaceInput } from "../types/ConfirmPublicVirtualInterfaceInput";
import { ConfirmPublicVirtualInterfaceOutput } from "../types/ConfirmPublicVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/ConfirmPublicVirtualInterfaceInput";
export * from "../types/ConfirmPublicVirtualInterfaceOutput";
export * from "../types/ConfirmPublicVirtualInterfaceExceptionsUnion";

export class ConfirmPublicVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmPublicVirtualInterfaceInput,
      OutputTypesUnion,
      ConfirmPublicVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ConfirmPublicVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmPublicVirtualInterfaceInput,
    ConfirmPublicVirtualInterfaceOutput,
    Uint8Array
  >();

  constructor(readonly input: ConfirmPublicVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfirmPublicVirtualInterfaceInput,
    ConfirmPublicVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ConfirmPublicVirtualInterfaceInput,
        ConfirmPublicVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
