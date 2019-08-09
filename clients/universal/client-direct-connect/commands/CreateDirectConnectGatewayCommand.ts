import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDirectConnectGateway } from "../model/CreateDirectConnectGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDirectConnectGatewayInput } from "../types/CreateDirectConnectGatewayInput";
import { CreateDirectConnectGatewayOutput } from "../types/CreateDirectConnectGatewayOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateDirectConnectGatewayInput";
export * from "../types/CreateDirectConnectGatewayOutput";
export * from "../types/CreateDirectConnectGatewayExceptionsUnion";

export class CreateDirectConnectGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDirectConnectGatewayInput,
      OutputTypesUnion,
      CreateDirectConnectGatewayOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDirectConnectGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectConnectGatewayInput,
    CreateDirectConnectGatewayOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDirectConnectGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDirectConnectGatewayInput,
    CreateDirectConnectGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDirectConnectGatewayInput,
        CreateDirectConnectGatewayOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
