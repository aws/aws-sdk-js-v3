import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDirectConnectGateway } from "../model/operations/DeleteDirectConnectGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDirectConnectGatewayInput } from "../types/DeleteDirectConnectGatewayInput";
import { DeleteDirectConnectGatewayOutput } from "../types/DeleteDirectConnectGatewayOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteDirectConnectGatewayInput";
export * from "../types/DeleteDirectConnectGatewayOutput";
export * from "../types/DeleteDirectConnectGatewayExceptionsUnion";

export class DeleteDirectConnectGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDirectConnectGatewayInput,
      OutputTypesUnion,
      DeleteDirectConnectGatewayOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDirectConnectGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDirectConnectGatewayInput,
    DeleteDirectConnectGatewayOutput,
    Blob
  >();

  constructor(readonly input: DeleteDirectConnectGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDirectConnectGatewayInput,
    DeleteDirectConnectGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDirectConnectGatewayInput,
        DeleteDirectConnectGatewayOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
