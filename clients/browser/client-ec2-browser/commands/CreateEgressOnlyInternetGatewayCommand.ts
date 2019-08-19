import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEgressOnlyInternetGateway } from "../model/operations/CreateEgressOnlyInternetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEgressOnlyInternetGatewayInput } from "../types/CreateEgressOnlyInternetGatewayInput";
import { CreateEgressOnlyInternetGatewayOutput } from "../types/CreateEgressOnlyInternetGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateEgressOnlyInternetGatewayInput";
export * from "../types/CreateEgressOnlyInternetGatewayOutput";
export * from "../types/CreateEgressOnlyInternetGatewayExceptionsUnion";

export class CreateEgressOnlyInternetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEgressOnlyInternetGatewayInput,
      OutputTypesUnion,
      CreateEgressOnlyInternetGatewayOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateEgressOnlyInternetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEgressOnlyInternetGatewayInput,
    CreateEgressOnlyInternetGatewayOutput,
    Blob
  >();

  constructor(readonly input: CreateEgressOnlyInternetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEgressOnlyInternetGatewayInput,
    CreateEgressOnlyInternetGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateEgressOnlyInternetGatewayInput,
        CreateEgressOnlyInternetGatewayOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
