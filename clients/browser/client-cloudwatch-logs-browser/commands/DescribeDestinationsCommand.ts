import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDestinations } from "../model/operations/DescribeDestinations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDestinationsInput } from "../types/DescribeDestinationsInput";
import { DescribeDestinationsOutput } from "../types/DescribeDestinationsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeDestinationsInput";
export * from "../types/DescribeDestinationsOutput";
export * from "../types/DescribeDestinationsExceptionsUnion";

export class DescribeDestinationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDestinationsInput,
      OutputTypesUnion,
      DescribeDestinationsOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDestinations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDestinationsInput,
    DescribeDestinationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDestinationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDestinationsInput,
    DescribeDestinationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDestinationsInput, DescribeDestinationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
