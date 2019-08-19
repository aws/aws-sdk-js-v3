import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveSourceIdentifierFromSubscription } from "../model/operations/RemoveSourceIdentifierFromSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveSourceIdentifierFromSubscriptionInput } from "../types/RemoveSourceIdentifierFromSubscriptionInput";
import { RemoveSourceIdentifierFromSubscriptionOutput } from "../types/RemoveSourceIdentifierFromSubscriptionOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RemoveSourceIdentifierFromSubscriptionInput";
export * from "../types/RemoveSourceIdentifierFromSubscriptionOutput";
export * from "../types/RemoveSourceIdentifierFromSubscriptionExceptionsUnion";

export class RemoveSourceIdentifierFromSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveSourceIdentifierFromSubscriptionInput,
      OutputTypesUnion,
      RemoveSourceIdentifierFromSubscriptionOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveSourceIdentifierFromSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveSourceIdentifierFromSubscriptionInput,
    RemoveSourceIdentifierFromSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveSourceIdentifierFromSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveSourceIdentifierFromSubscriptionInput,
    RemoveSourceIdentifierFromSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveSourceIdentifierFromSubscriptionInput,
        RemoveSourceIdentifierFromSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
