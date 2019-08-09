import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVpnGateway } from "../model/CreateVpnGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpnGatewayInput } from "../types/CreateVpnGatewayInput";
import { CreateVpnGatewayOutput } from "../types/CreateVpnGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpnGatewayInput";
export * from "../types/CreateVpnGatewayOutput";
export * from "../types/CreateVpnGatewayExceptionsUnion";

export class CreateVpnGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpnGatewayInput,
      OutputTypesUnion,
      CreateVpnGatewayOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVpnGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpnGatewayInput,
    CreateVpnGatewayOutput,
    Blob
  >();

  constructor(readonly input: CreateVpnGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVpnGatewayInput, CreateVpnGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVpnGatewayInput, CreateVpnGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
