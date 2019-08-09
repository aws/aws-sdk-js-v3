import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AllocatePublicVirtualInterface } from "../model/AllocatePublicVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocatePublicVirtualInterfaceInput } from "../types/AllocatePublicVirtualInterfaceInput";
import { AllocatePublicVirtualInterfaceOutput } from "../types/AllocatePublicVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AllocatePublicVirtualInterfaceInput";
export * from "../types/AllocatePublicVirtualInterfaceOutput";
export * from "../types/AllocatePublicVirtualInterfaceExceptionsUnion";

export class AllocatePublicVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocatePublicVirtualInterfaceInput,
      OutputTypesUnion,
      AllocatePublicVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AllocatePublicVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocatePublicVirtualInterfaceInput,
    AllocatePublicVirtualInterfaceOutput,
    Uint8Array
  >();

  constructor(readonly input: AllocatePublicVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AllocatePublicVirtualInterfaceInput,
    AllocatePublicVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AllocatePublicVirtualInterfaceInput,
        AllocatePublicVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
