import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetWebhook } from "../model/operations/GetWebhook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWebhookInput } from "../types/GetWebhookInput";
import { GetWebhookOutput } from "../types/GetWebhookOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/GetWebhookInput";
export * from "../types/GetWebhookOutput";
export * from "../types/GetWebhookExceptionsUnion";

export class GetWebhookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWebhookInput,
      OutputTypesUnion,
      GetWebhookOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = GetWebhook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWebhookInput,
    GetWebhookOutput,
    Blob
  >();

  constructor(readonly input: GetWebhookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetWebhookInput, GetWebhookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWebhookInput, GetWebhookOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
