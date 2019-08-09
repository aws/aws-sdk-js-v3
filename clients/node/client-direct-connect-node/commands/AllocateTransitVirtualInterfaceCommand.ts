import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AllocateTransitVirtualInterface } from "../model/AllocateTransitVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocateTransitVirtualInterfaceInput } from "../types/AllocateTransitVirtualInterfaceInput";
import { AllocateTransitVirtualInterfaceOutput } from "../types/AllocateTransitVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AllocateTransitVirtualInterfaceInput";
export * from "../types/AllocateTransitVirtualInterfaceOutput";
export * from "../types/AllocateTransitVirtualInterfaceExceptionsUnion";

export class AllocateTransitVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocateTransitVirtualInterfaceInput,
      OutputTypesUnion,
      AllocateTransitVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AllocateTransitVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocateTransitVirtualInterfaceInput,
    AllocateTransitVirtualInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: AllocateTransitVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AllocateTransitVirtualInterfaceInput,
    AllocateTransitVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AllocateTransitVirtualInterfaceInput,
        AllocateTransitVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
