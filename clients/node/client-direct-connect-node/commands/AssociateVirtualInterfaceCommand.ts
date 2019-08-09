import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateVirtualInterface } from "../model/AssociateVirtualInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateVirtualInterfaceInput } from "../types/AssociateVirtualInterfaceInput";
import { AssociateVirtualInterfaceOutput } from "../types/AssociateVirtualInterfaceOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AssociateVirtualInterfaceInput";
export * from "../types/AssociateVirtualInterfaceOutput";
export * from "../types/AssociateVirtualInterfaceExceptionsUnion";

export class AssociateVirtualInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateVirtualInterfaceInput,
      OutputTypesUnion,
      AssociateVirtualInterfaceOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateVirtualInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateVirtualInterfaceInput,
    AssociateVirtualInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateVirtualInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateVirtualInterfaceInput,
    AssociateVirtualInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateVirtualInterfaceInput, AssociateVirtualInterfaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
