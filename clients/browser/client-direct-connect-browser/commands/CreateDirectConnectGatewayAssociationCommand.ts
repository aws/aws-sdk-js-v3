import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDirectConnectGatewayAssociation } from "../model/CreateDirectConnectGatewayAssociation";
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
      Blob
    > {
  readonly model = CreateDirectConnectGatewayAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectConnectGatewayAssociationInput,
    CreateDirectConnectGatewayAssociationOutput,
    Blob
  >();

  constructor(readonly input: CreateDirectConnectGatewayAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
