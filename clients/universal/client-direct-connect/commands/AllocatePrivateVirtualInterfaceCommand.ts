import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AllocatePrivateVirtualInterface } from "../model/AllocatePrivateVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocatePrivateVirtualInterfaceInput } from "../types/AllocatePrivateVirtualInterfaceInput";
import { AllocatePrivateVirtualInterfaceOutput } from "../types/AllocatePrivateVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AllocatePrivateVirtualInterfaceInput";
export * from "../types/AllocatePrivateVirtualInterfaceOutput";
export * from "../types/AllocatePrivateVirtualInterfaceExceptionsUnion";

export class AllocatePrivateVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocatePrivateVirtualInterfaceInput,
      OutputTypesUnion,
      AllocatePrivateVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AllocatePrivateVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocatePrivateVirtualInterfaceInput,
    AllocatePrivateVirtualInterfaceOutput,
    Uint8Array
  >();

  constructor(readonly input: AllocatePrivateVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AllocatePrivateVirtualInterfaceInput,
    AllocatePrivateVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AllocatePrivateVirtualInterfaceInput,
        AllocatePrivateVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
