import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePublicVirtualInterface } from "../model/CreatePublicVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePublicVirtualInterfaceInput } from "../types/CreatePublicVirtualInterfaceInput";
import { CreatePublicVirtualInterfaceOutput } from "../types/CreatePublicVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreatePublicVirtualInterfaceInput";
export * from "../types/CreatePublicVirtualInterfaceOutput";
export * from "../types/CreatePublicVirtualInterfaceExceptionsUnion";

export class CreatePublicVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePublicVirtualInterfaceInput,
      OutputTypesUnion,
      CreatePublicVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreatePublicVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePublicVirtualInterfaceInput,
    CreatePublicVirtualInterfaceOutput,
    Uint8Array
  >();

  constructor(readonly input: CreatePublicVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePublicVirtualInterfaceInput,
    CreatePublicVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreatePublicVirtualInterfaceInput,
        CreatePublicVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
