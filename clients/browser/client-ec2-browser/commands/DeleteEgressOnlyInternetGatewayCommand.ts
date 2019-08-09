import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEgressOnlyInternetGateway } from "../model/DeleteEgressOnlyInternetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEgressOnlyInternetGatewayInput } from "../types/DeleteEgressOnlyInternetGatewayInput";
import { DeleteEgressOnlyInternetGatewayOutput } from "../types/DeleteEgressOnlyInternetGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteEgressOnlyInternetGatewayInput";
export * from "../types/DeleteEgressOnlyInternetGatewayOutput";
export * from "../types/DeleteEgressOnlyInternetGatewayExceptionsUnion";

export class DeleteEgressOnlyInternetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEgressOnlyInternetGatewayInput,
      OutputTypesUnion,
      DeleteEgressOnlyInternetGatewayOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEgressOnlyInternetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEgressOnlyInternetGatewayInput,
    DeleteEgressOnlyInternetGatewayOutput,
    Blob
  >();

  constructor(readonly input: DeleteEgressOnlyInternetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEgressOnlyInternetGatewayInput,
    DeleteEgressOnlyInternetGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteEgressOnlyInternetGatewayInput,
        DeleteEgressOnlyInternetGatewayOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
