import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSchedule } from "../model/DescribeSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduleInput } from "../types/DescribeScheduleInput";
import { DescribeScheduleOutput } from "../types/DescribeScheduleOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DescribeScheduleInput";
export * from "../types/DescribeScheduleOutput";
export * from "../types/DescribeScheduleExceptionsUnion";

export class DescribeScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScheduleInput,
      OutputTypesUnion,
      DescribeScheduleOutput,
      MediaLiveResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduleInput,
    DescribeScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeScheduleInput, DescribeScheduleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScheduleInput, DescribeScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
