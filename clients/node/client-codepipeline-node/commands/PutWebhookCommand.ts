import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutWebhook } from "../model/PutWebhook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutWebhookInput } from "../types/PutWebhookInput";
import { PutWebhookOutput } from "../types/PutWebhookOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutWebhookInput";
export * from "../types/PutWebhookOutput";
export * from "../types/PutWebhookExceptionsUnion";

export class PutWebhookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutWebhookInput,
      OutputTypesUnion,
      PutWebhookOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutWebhook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutWebhookInput,
    PutWebhookOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutWebhookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<PutWebhookInput, PutWebhookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutWebhookInput, PutWebhookOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
