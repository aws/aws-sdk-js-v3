import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeComponent } from "../model/operations/DescribeComponent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeComponentInput } from "../types/DescribeComponentInput";
import { DescribeComponentOutput } from "../types/DescribeComponentOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeComponentInput";
export * from "../types/DescribeComponentOutput";
export * from "../types/DescribeComponentExceptionsUnion";

export class DescribeComponentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeComponentInput,
      OutputTypesUnion,
      DescribeComponentOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeComponent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComponentInput,
    DescribeComponentOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeComponentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeComponentInput, DescribeComponentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeComponentInput, DescribeComponentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
