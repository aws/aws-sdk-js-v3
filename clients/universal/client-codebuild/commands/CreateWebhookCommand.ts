import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWebhook } from "../model/CreateWebhook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWebhookInput } from "../types/CreateWebhookInput";
import { CreateWebhookOutput } from "../types/CreateWebhookOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/CreateWebhookInput";
export * from "../types/CreateWebhookOutput";
export * from "../types/CreateWebhookExceptionsUnion";

export class CreateWebhookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWebhookInput,
      OutputTypesUnion,
      CreateWebhookOutput,
      CodeBuildResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateWebhook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWebhookInput,
    CreateWebhookOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateWebhookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWebhookInput, CreateWebhookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWebhookInput, CreateWebhookOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
