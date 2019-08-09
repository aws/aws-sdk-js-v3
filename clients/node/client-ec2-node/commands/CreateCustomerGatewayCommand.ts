import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCustomerGateway } from "../model/CreateCustomerGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCustomerGatewayInput } from "../types/CreateCustomerGatewayInput";
import { CreateCustomerGatewayOutput } from "../types/CreateCustomerGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateCustomerGatewayInput";
export * from "../types/CreateCustomerGatewayOutput";
export * from "../types/CreateCustomerGatewayExceptionsUnion";

export class CreateCustomerGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCustomerGatewayInput,
      OutputTypesUnion,
      CreateCustomerGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCustomerGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCustomerGatewayInput,
    CreateCustomerGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCustomerGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCustomerGatewayInput,
    CreateCustomerGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCustomerGatewayInput, CreateCustomerGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
