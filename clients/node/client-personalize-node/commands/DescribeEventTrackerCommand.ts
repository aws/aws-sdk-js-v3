import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEventTracker } from "../model/DescribeEventTracker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventTrackerInput } from "../types/DescribeEventTrackerInput";
import { DescribeEventTrackerOutput } from "../types/DescribeEventTrackerOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeEventTrackerInput";
export * from "../types/DescribeEventTrackerOutput";
export * from "../types/DescribeEventTrackerExceptionsUnion";

export class DescribeEventTrackerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventTrackerInput,
      OutputTypesUnion,
      DescribeEventTrackerOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEventTracker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventTrackerInput,
    DescribeEventTrackerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEventTrackerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventTrackerInput,
    DescribeEventTrackerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventTrackerInput, DescribeEventTrackerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
