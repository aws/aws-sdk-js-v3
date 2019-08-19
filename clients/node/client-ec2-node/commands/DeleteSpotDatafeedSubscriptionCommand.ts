import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSpotDatafeedSubscription } from "../model/operations/DeleteSpotDatafeedSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSpotDatafeedSubscriptionInput } from "../types/DeleteSpotDatafeedSubscriptionInput";
import { DeleteSpotDatafeedSubscriptionOutput } from "../types/DeleteSpotDatafeedSubscriptionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteSpotDatafeedSubscriptionInput";
export * from "../types/DeleteSpotDatafeedSubscriptionOutput";
export * from "../types/DeleteSpotDatafeedSubscriptionExceptionsUnion";

export class DeleteSpotDatafeedSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSpotDatafeedSubscriptionInput,
      OutputTypesUnion,
      DeleteSpotDatafeedSubscriptionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSpotDatafeedSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSpotDatafeedSubscriptionInput,
    DeleteSpotDatafeedSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSpotDatafeedSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSpotDatafeedSubscriptionInput,
    DeleteSpotDatafeedSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteSpotDatafeedSubscriptionInput,
        DeleteSpotDatafeedSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
