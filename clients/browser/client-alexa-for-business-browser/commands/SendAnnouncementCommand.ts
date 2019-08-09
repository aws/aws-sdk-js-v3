import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendAnnouncement } from "../model/SendAnnouncement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendAnnouncementInput } from "../types/SendAnnouncementInput";
import { SendAnnouncementOutput } from "../types/SendAnnouncementOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SendAnnouncementInput";
export * from "../types/SendAnnouncementOutput";
export * from "../types/SendAnnouncementExceptionsUnion";

export class SendAnnouncementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendAnnouncementInput,
      OutputTypesUnion,
      SendAnnouncementOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = SendAnnouncement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendAnnouncementInput,
    SendAnnouncementOutput,
    Blob
  >();

  constructor(readonly input: SendAnnouncementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SendAnnouncementInput, SendAnnouncementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendAnnouncementInput, SendAnnouncementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
