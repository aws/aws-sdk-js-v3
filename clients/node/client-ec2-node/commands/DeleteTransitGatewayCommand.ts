import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTransitGateway } from "../model/operations/DeleteTransitGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTransitGatewayInput } from "../types/DeleteTransitGatewayInput";
import { DeleteTransitGatewayOutput } from "../types/DeleteTransitGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTransitGatewayInput";
export * from "../types/DeleteTransitGatewayOutput";
export * from "../types/DeleteTransitGatewayExceptionsUnion";

export class DeleteTransitGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTransitGatewayInput,
      OutputTypesUnion,
      DeleteTransitGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTransitGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTransitGatewayInput,
    DeleteTransitGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTransitGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTransitGatewayInput,
    DeleteTransitGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTransitGatewayInput, DeleteTransitGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
