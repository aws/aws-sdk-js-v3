import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCrawlerSchedule } from "../model/UpdateCrawlerSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCrawlerScheduleInput } from "../types/UpdateCrawlerScheduleInput";
import { UpdateCrawlerScheduleOutput } from "../types/UpdateCrawlerScheduleOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateCrawlerScheduleInput";
export * from "../types/UpdateCrawlerScheduleOutput";
export * from "../types/UpdateCrawlerScheduleExceptionsUnion";

export class UpdateCrawlerScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCrawlerScheduleInput,
      OutputTypesUnion,
      UpdateCrawlerScheduleOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCrawlerSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCrawlerScheduleInput,
    UpdateCrawlerScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateCrawlerScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCrawlerScheduleInput,
    UpdateCrawlerScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCrawlerScheduleInput, UpdateCrawlerScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
