import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCustomerGateway } from "../model/operations/DeleteCustomerGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCustomerGatewayInput } from "../types/DeleteCustomerGatewayInput";
import { DeleteCustomerGatewayOutput } from "../types/DeleteCustomerGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteCustomerGatewayInput";
export * from "../types/DeleteCustomerGatewayOutput";
export * from "../types/DeleteCustomerGatewayExceptionsUnion";

export class DeleteCustomerGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCustomerGatewayInput,
      OutputTypesUnion,
      DeleteCustomerGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCustomerGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCustomerGatewayInput,
    DeleteCustomerGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCustomerGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCustomerGatewayInput,
    DeleteCustomerGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCustomerGatewayInput, DeleteCustomerGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
