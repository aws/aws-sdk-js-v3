import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopCrawlerSchedule } from "../model/StopCrawlerSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopCrawlerScheduleInput } from "../types/StopCrawlerScheduleInput";
import { StopCrawlerScheduleOutput } from "../types/StopCrawlerScheduleOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StopCrawlerScheduleInput";
export * from "../types/StopCrawlerScheduleOutput";
export * from "../types/StopCrawlerScheduleExceptionsUnion";

export class StopCrawlerScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopCrawlerScheduleInput,
      OutputTypesUnion,
      StopCrawlerScheduleOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopCrawlerSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopCrawlerScheduleInput,
    StopCrawlerScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: StopCrawlerScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopCrawlerScheduleInput,
    StopCrawlerScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopCrawlerScheduleInput, StopCrawlerScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
