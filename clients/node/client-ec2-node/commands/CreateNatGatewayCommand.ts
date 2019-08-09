import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNatGateway } from "../model/CreateNatGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNatGatewayInput } from "../types/CreateNatGatewayInput";
import { CreateNatGatewayOutput } from "../types/CreateNatGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateNatGatewayInput";
export * from "../types/CreateNatGatewayOutput";
export * from "../types/CreateNatGatewayExceptionsUnion";

export class CreateNatGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNatGatewayInput,
      OutputTypesUnion,
      CreateNatGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNatGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNatGatewayInput,
    CreateNatGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNatGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateNatGatewayInput, CreateNatGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNatGatewayInput, CreateNatGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
