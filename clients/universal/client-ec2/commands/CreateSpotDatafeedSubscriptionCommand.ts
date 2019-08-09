import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSpotDatafeedSubscription } from "../model/CreateSpotDatafeedSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSpotDatafeedSubscriptionInput } from "../types/CreateSpotDatafeedSubscriptionInput";
import { CreateSpotDatafeedSubscriptionOutput } from "../types/CreateSpotDatafeedSubscriptionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateSpotDatafeedSubscriptionInput";
export * from "../types/CreateSpotDatafeedSubscriptionOutput";
export * from "../types/CreateSpotDatafeedSubscriptionExceptionsUnion";

export class CreateSpotDatafeedSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSpotDatafeedSubscriptionInput,
      OutputTypesUnion,
      CreateSpotDatafeedSubscriptionOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateSpotDatafeedSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSpotDatafeedSubscriptionInput,
    CreateSpotDatafeedSubscriptionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateSpotDatafeedSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSpotDatafeedSubscriptionInput,
    CreateSpotDatafeedSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSpotDatafeedSubscriptionInput,
        CreateSpotDatafeedSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
