import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteWebhook } from "../model/DeleteWebhook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWebhookInput } from "../types/DeleteWebhookInput";
import { DeleteWebhookOutput } from "../types/DeleteWebhookOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/DeleteWebhookInput";
export * from "../types/DeleteWebhookOutput";
export * from "../types/DeleteWebhookExceptionsUnion";

export class DeleteWebhookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWebhookInput,
      OutputTypesUnion,
      DeleteWebhookOutput,
      CodeBuildResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteWebhook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWebhookInput,
    DeleteWebhookOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteWebhookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteWebhookInput, DeleteWebhookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWebhookInput, DeleteWebhookOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
