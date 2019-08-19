import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGatewayResponse } from "../model/operations/DeleteGatewayResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGatewayResponseInput } from "../types/DeleteGatewayResponseInput";
import { DeleteGatewayResponseOutput } from "../types/DeleteGatewayResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteGatewayResponseInput";
export * from "../types/DeleteGatewayResponseOutput";
export * from "../types/DeleteGatewayResponseExceptionsUnion";

export class DeleteGatewayResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGatewayResponseInput,
      OutputTypesUnion,
      DeleteGatewayResponseOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGatewayResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGatewayResponseInput,
    DeleteGatewayResponseOutput,
    Blob
  >();

  constructor(readonly input: DeleteGatewayResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteGatewayResponseInput,
    DeleteGatewayResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGatewayResponseInput, DeleteGatewayResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
