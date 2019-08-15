import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInternetGateway } from "../model/operations/DeleteInternetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInternetGatewayInput } from "../types/DeleteInternetGatewayInput";
import { DeleteInternetGatewayOutput } from "../types/DeleteInternetGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteInternetGatewayInput";
export * from "../types/DeleteInternetGatewayOutput";
export * from "../types/DeleteInternetGatewayExceptionsUnion";

export class DeleteInternetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInternetGatewayInput,
      OutputTypesUnion,
      DeleteInternetGatewayOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteInternetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInternetGatewayInput,
    DeleteInternetGatewayOutput,
    Blob
  >();

  constructor(readonly input: DeleteInternetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteInternetGatewayInput,
    DeleteInternetGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInternetGatewayInput, DeleteInternetGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
