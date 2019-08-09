import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePartnerEventSource } from "../model/CreatePartnerEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePartnerEventSourceInput } from "../types/CreatePartnerEventSourceInput";
import { CreatePartnerEventSourceOutput } from "../types/CreatePartnerEventSourceOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/CreatePartnerEventSourceInput";
export * from "../types/CreatePartnerEventSourceOutput";
export * from "../types/CreatePartnerEventSourceExceptionsUnion";

export class CreatePartnerEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePartnerEventSourceInput,
      OutputTypesUnion,
      CreatePartnerEventSourceOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePartnerEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePartnerEventSourceInput,
    CreatePartnerEventSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePartnerEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePartnerEventSourceInput,
    CreatePartnerEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePartnerEventSourceInput, CreatePartnerEventSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
