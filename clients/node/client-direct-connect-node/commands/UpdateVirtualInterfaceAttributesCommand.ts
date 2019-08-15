import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateVirtualInterfaceAttributes } from "../model/operations/UpdateVirtualInterfaceAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVirtualInterfaceAttributesInput } from "../types/UpdateVirtualInterfaceAttributesInput";
import { UpdateVirtualInterfaceAttributesOutput } from "../types/UpdateVirtualInterfaceAttributesOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/UpdateVirtualInterfaceAttributesInput";
export * from "../types/UpdateVirtualInterfaceAttributesOutput";
export * from "../types/UpdateVirtualInterfaceAttributesExceptionsUnion";

export class UpdateVirtualInterfaceAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVirtualInterfaceAttributesInput,
      OutputTypesUnion,
      UpdateVirtualInterfaceAttributesOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateVirtualInterfaceAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVirtualInterfaceAttributesInput,
    UpdateVirtualInterfaceAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateVirtualInterfaceAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVirtualInterfaceAttributesInput,
    UpdateVirtualInterfaceAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateVirtualInterfaceAttributesInput,
        UpdateVirtualInterfaceAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
