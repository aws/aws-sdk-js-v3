import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNatGateway } from "../model/DeleteNatGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNatGatewayInput } from "../types/DeleteNatGatewayInput";
import { DeleteNatGatewayOutput } from "../types/DeleteNatGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteNatGatewayInput";
export * from "../types/DeleteNatGatewayOutput";
export * from "../types/DeleteNatGatewayExceptionsUnion";

export class DeleteNatGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNatGatewayInput,
      OutputTypesUnion,
      DeleteNatGatewayOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteNatGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNatGatewayInput,
    DeleteNatGatewayOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteNatGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteNatGatewayInput, DeleteNatGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNatGatewayInput, DeleteNatGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
