import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateWebhook } from "../model/UpdateWebhook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateWebhookInput } from "../types/UpdateWebhookInput";
import { UpdateWebhookOutput } from "../types/UpdateWebhookOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/UpdateWebhookInput";
export * from "../types/UpdateWebhookOutput";
export * from "../types/UpdateWebhookExceptionsUnion";

export class UpdateWebhookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateWebhookInput,
      OutputTypesUnion,
      UpdateWebhookOutput,
      CodeBuildResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateWebhook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateWebhookInput,
    UpdateWebhookOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateWebhookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateWebhookInput, UpdateWebhookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateWebhookInput, UpdateWebhookOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
