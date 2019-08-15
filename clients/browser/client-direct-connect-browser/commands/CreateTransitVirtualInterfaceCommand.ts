import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTransitVirtualInterface } from "../model/operations/CreateTransitVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTransitVirtualInterfaceInput } from "../types/CreateTransitVirtualInterfaceInput";
import { CreateTransitVirtualInterfaceOutput } from "../types/CreateTransitVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateTransitVirtualInterfaceInput";
export * from "../types/CreateTransitVirtualInterfaceOutput";
export * from "../types/CreateTransitVirtualInterfaceExceptionsUnion";

export class CreateTransitVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTransitVirtualInterfaceInput,
      OutputTypesUnion,
      CreateTransitVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTransitVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransitVirtualInterfaceInput,
    CreateTransitVirtualInterfaceOutput,
    Blob
  >();

  constructor(readonly input: CreateTransitVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTransitVirtualInterfaceInput,
    CreateTransitVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateTransitVirtualInterfaceInput,
        CreateTransitVirtualInterfaceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
