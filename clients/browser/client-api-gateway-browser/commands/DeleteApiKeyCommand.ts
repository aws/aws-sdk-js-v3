import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApiKey } from "../model/operations/DeleteApiKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApiKeyInput } from "../types/DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "../types/DeleteApiKeyOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteApiKeyInput";
export * from "../types/DeleteApiKeyOutput";
export * from "../types/DeleteApiKeyExceptionsUnion";

export class DeleteApiKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApiKeyInput,
      OutputTypesUnion,
      DeleteApiKeyOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApiKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApiKeyInput,
    DeleteApiKeyOutput,
    Blob
  >();

  constructor(readonly input: DeleteApiKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteApiKeyInput, DeleteApiKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApiKeyInput, DeleteApiKeyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
