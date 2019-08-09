import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVpcEndpoints } from "../model/DeleteVpcEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcEndpointsInput } from "../types/DeleteVpcEndpointsInput";
import { DeleteVpcEndpointsOutput } from "../types/DeleteVpcEndpointsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpcEndpointsInput";
export * from "../types/DeleteVpcEndpointsOutput";
export * from "../types/DeleteVpcEndpointsExceptionsUnion";

export class DeleteVpcEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcEndpointsInput,
      OutputTypesUnion,
      DeleteVpcEndpointsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVpcEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcEndpointsInput,
    DeleteVpcEndpointsOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVpcEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpcEndpointsInput,
    DeleteVpcEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVpcEndpointsInput, DeleteVpcEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
