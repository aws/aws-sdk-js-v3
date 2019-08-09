import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteIntegrationResponse } from "../model/DeleteIntegrationResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIntegrationResponseInput } from "../types/DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "../types/DeleteIntegrationResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteIntegrationResponseInput";
export * from "../types/DeleteIntegrationResponseOutput";
export * from "../types/DeleteIntegrationResponseExceptionsUnion";

export class DeleteIntegrationResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIntegrationResponseInput,
      OutputTypesUnion,
      DeleteIntegrationResponseOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteIntegrationResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIntegrationResponseInput,
    DeleteIntegrationResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteIntegrationResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteIntegrationResponseInput,
    DeleteIntegrationResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIntegrationResponseInput, DeleteIntegrationResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
