import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePartnerEventSource } from "../model/DeletePartnerEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePartnerEventSourceInput } from "../types/DeletePartnerEventSourceInput";
import { DeletePartnerEventSourceOutput } from "../types/DeletePartnerEventSourceOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/DeletePartnerEventSourceInput";
export * from "../types/DeletePartnerEventSourceOutput";
export * from "../types/DeletePartnerEventSourceExceptionsUnion";

export class DeletePartnerEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePartnerEventSourceInput,
      OutputTypesUnion,
      DeletePartnerEventSourceOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePartnerEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePartnerEventSourceInput,
    DeletePartnerEventSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePartnerEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePartnerEventSourceInput,
    DeletePartnerEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePartnerEventSourceInput, DeletePartnerEventSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
