import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVpnGateway } from "../model/operations/CreateVpnGateway";
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
      _stream.Readable
    > {
  readonly model = CreateVpnGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpnGatewayInput,
    CreateVpnGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVpnGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
