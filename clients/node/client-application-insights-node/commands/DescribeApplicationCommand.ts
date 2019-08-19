import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeApplication } from "../model/operations/DescribeApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationInput } from "../types/DescribeApplicationInput";
import { DescribeApplicationOutput } from "../types/DescribeApplicationOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeApplicationInput";
export * from "../types/DescribeApplicationOutput";
export * from "../types/DescribeApplicationExceptionsUnion";

export class DescribeApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeApplicationInput,
      OutputTypesUnion,
      DescribeApplicationOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationInput,
    DescribeApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeApplicationInput,
    DescribeApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeApplicationInput, DescribeApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
