import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ConfirmTransitVirtualInterface } from "../model/operations/ConfirmTransitVirtualInterface";
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
      _stream.Readable
    > {
  readonly model = ConfirmTransitVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmTransitVirtualInterfaceInput,
    ConfirmTransitVirtualInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ConfirmTransitVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
