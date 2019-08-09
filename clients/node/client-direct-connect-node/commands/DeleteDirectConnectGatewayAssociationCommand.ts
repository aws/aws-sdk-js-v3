import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDirectConnectGatewayAssociation } from "../model/DeleteDirectConnectGatewayAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDirectConnectGatewayAssociationInput } from "../types/DeleteDirectConnectGatewayAssociationInput";
import { DeleteDirectConnectGatewayAssociationOutput } from "../types/DeleteDirectConnectGatewayAssociationOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteDirectConnectGatewayAssociationInput";
export * from "../types/DeleteDirectConnectGatewayAssociationOutput";
export * from "../types/DeleteDirectConnectGatewayAssociationExceptionsUnion";

export class DeleteDirectConnectGatewayAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDirectConnectGatewayAssociationInput,
      OutputTypesUnion,
      DeleteDirectConnectGatewayAssociationOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDirectConnectGatewayAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDirectConnectGatewayAssociationInput,
    DeleteDirectConnectGatewayAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDirectConnectGatewayAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDirectConnectGatewayAssociationInput,
    DeleteDirectConnectGatewayAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDirectConnectGatewayAssociationInput,
        DeleteDirectConnectGatewayAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
