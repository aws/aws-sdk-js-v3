import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDirectConnectGatewayAssociation } from "../model/operations/CreateDirectConnectGatewayAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDirectConnectGatewayAssociationInput } from "../types/CreateDirectConnectGatewayAssociationInput";
import { CreateDirectConnectGatewayAssociationOutput } from "../types/CreateDirectConnectGatewayAssociationOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateDirectConnectGatewayAssociationInput";
export * from "../types/CreateDirectConnectGatewayAssociationOutput";
export * from "../types/CreateDirectConnectGatewayAssociationExceptionsUnion";

export class CreateDirectConnectGatewayAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDirectConnectGatewayAssociationInput,
      OutputTypesUnion,
      CreateDirectConnectGatewayAssociationOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDirectConnectGatewayAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectConnectGatewayAssociationInput,
    CreateDirectConnectGatewayAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDirectConnectGatewayAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDirectConnectGatewayAssociationInput,
    CreateDirectConnectGatewayAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDirectConnectGatewayAssociationInput,
        CreateDirectConnectGatewayAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
