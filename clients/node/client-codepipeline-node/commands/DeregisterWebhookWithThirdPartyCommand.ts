import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterWebhookWithThirdParty } from "../model/DeregisterWebhookWithThirdParty";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterWebhookWithThirdPartyInput } from "../types/DeregisterWebhookWithThirdPartyInput";
import { DeregisterWebhookWithThirdPartyOutput } from "../types/DeregisterWebhookWithThirdPartyOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/DeregisterWebhookWithThirdPartyInput";
export * from "../types/DeregisterWebhookWithThirdPartyOutput";
export * from "../types/DeregisterWebhookWithThirdPartyExceptionsUnion";

export class DeregisterWebhookWithThirdPartyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterWebhookWithThirdPartyInput,
      OutputTypesUnion,
      DeregisterWebhookWithThirdPartyOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterWebhookWithThirdParty;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterWebhookWithThirdPartyInput,
    DeregisterWebhookWithThirdPartyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterWebhookWithThirdPartyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterWebhookWithThirdPartyInput,
    DeregisterWebhookWithThirdPartyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterWebhookWithThirdPartyInput,
        DeregisterWebhookWithThirdPartyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
