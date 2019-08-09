import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTransitGateway } from "../model/CreateTransitGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTransitGatewayInput } from "../types/CreateTransitGatewayInput";
import { CreateTransitGatewayOutput } from "../types/CreateTransitGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTransitGatewayInput";
export * from "../types/CreateTransitGatewayOutput";
export * from "../types/CreateTransitGatewayExceptionsUnion";

export class CreateTransitGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTransitGatewayInput,
      OutputTypesUnion,
      CreateTransitGatewayOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTransitGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransitGatewayInput,
    CreateTransitGatewayOutput,
    Blob
  >();

  constructor(readonly input: CreateTransitGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTransitGatewayInput,
    CreateTransitGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTransitGatewayInput, CreateTransitGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
