import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDirectConnectGatewayAssociation } from "../model/operations/UpdateDirectConnectGatewayAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDirectConnectGatewayAssociationInput } from "../types/UpdateDirectConnectGatewayAssociationInput";
import { UpdateDirectConnectGatewayAssociationOutput } from "../types/UpdateDirectConnectGatewayAssociationOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/UpdateDirectConnectGatewayAssociationInput";
export * from "../types/UpdateDirectConnectGatewayAssociationOutput";
export * from "../types/UpdateDirectConnectGatewayAssociationExceptionsUnion";

export class UpdateDirectConnectGatewayAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDirectConnectGatewayAssociationInput,
      OutputTypesUnion,
      UpdateDirectConnectGatewayAssociationOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDirectConnectGatewayAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDirectConnectGatewayAssociationInput,
    UpdateDirectConnectGatewayAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDirectConnectGatewayAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDirectConnectGatewayAssociationInput,
    UpdateDirectConnectGatewayAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateDirectConnectGatewayAssociationInput,
        UpdateDirectConnectGatewayAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
