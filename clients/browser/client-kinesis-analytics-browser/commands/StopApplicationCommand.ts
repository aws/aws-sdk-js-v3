import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopApplication } from "../model/StopApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopApplicationInput } from "../types/StopApplicationInput";
import { StopApplicationOutput } from "../types/StopApplicationOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/StopApplicationInput";
export * from "../types/StopApplicationOutput";
export * from "../types/StopApplicationExceptionsUnion";

export class StopApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopApplicationInput,
      OutputTypesUnion,
      StopApplicationOutput,
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = StopApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopApplicationInput,
    StopApplicationOutput,
    Blob
  >();

  constructor(readonly input: StopApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<StopApplicationInput, StopApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopApplicationInput, StopApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
