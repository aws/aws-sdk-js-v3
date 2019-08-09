import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmTransitVirtualInterface } from "../model/ConfirmTransitVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmTransitVirtualInterfaceInput } from "../types/ConfirmTransitVirtualInterfaceInput";
import { ConfirmTransitVirtualInterfaceOutput } from "../types/ConfirmTransitVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/ConfirmTransitVirtualInterfaceInput";
export * from "../types/ConfirmTransitVirtualInterfaceOutput";
export * from "../types/ConfirmTransitVirtualInterfaceExceptionsUnion";

export class ConfirmTransitVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmTransitVirtualInterfaceInput,
      OutputTypesUnion,
      ConfirmTransitVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = ConfirmTransitVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmTransitVirtualInterfaceInput,
    ConfirmTransitVirtualInterfaceOutput,
    Blob
  >();

  constructor(readonly input: ConfirmTransitVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfirmTransitVirtualInterfaceInput,
    ConfirmTransitVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ConfirmTransitVirtualInterfaceInput,
        ConfirmTransitVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
