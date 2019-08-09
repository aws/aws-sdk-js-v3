import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVpnGateway } from "../model/DeleteVpnGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpnGatewayInput } from "../types/DeleteVpnGatewayInput";
import { DeleteVpnGatewayOutput } from "../types/DeleteVpnGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpnGatewayInput";
export * from "../types/DeleteVpnGatewayOutput";
export * from "../types/DeleteVpnGatewayExceptionsUnion";

export class DeleteVpnGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpnGatewayInput,
      OutputTypesUnion,
      DeleteVpnGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVpnGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpnGatewayInput,
    DeleteVpnGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVpnGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVpnGatewayInput, DeleteVpnGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVpnGatewayInput, DeleteVpnGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
