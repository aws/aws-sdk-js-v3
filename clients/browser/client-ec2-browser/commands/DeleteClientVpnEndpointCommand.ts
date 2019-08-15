import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteClientVpnEndpoint } from "../model/operations/DeleteClientVpnEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClientVpnEndpointInput } from "../types/DeleteClientVpnEndpointInput";
import { DeleteClientVpnEndpointOutput } from "../types/DeleteClientVpnEndpointOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteClientVpnEndpointInput";
export * from "../types/DeleteClientVpnEndpointOutput";
export * from "../types/DeleteClientVpnEndpointExceptionsUnion";

export class DeleteClientVpnEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClientVpnEndpointInput,
      OutputTypesUnion,
      DeleteClientVpnEndpointOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteClientVpnEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClientVpnEndpointInput,
    DeleteClientVpnEndpointOutput,
    Blob
  >();

  constructor(readonly input: DeleteClientVpnEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClientVpnEndpointInput,
    DeleteClientVpnEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClientVpnEndpointInput, DeleteClientVpnEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
