import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVirtualInterface } from "../model/DeleteVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVirtualInterfaceInput } from "../types/DeleteVirtualInterfaceInput";
import { DeleteVirtualInterfaceOutput } from "../types/DeleteVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteVirtualInterfaceInput";
export * from "../types/DeleteVirtualInterfaceOutput";
export * from "../types/DeleteVirtualInterfaceExceptionsUnion";

export class DeleteVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVirtualInterfaceInput,
      OutputTypesUnion,
      DeleteVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVirtualInterfaceInput,
    DeleteVirtualInterfaceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVirtualInterfaceInput,
    DeleteVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVirtualInterfaceInput, DeleteVirtualInterfaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
