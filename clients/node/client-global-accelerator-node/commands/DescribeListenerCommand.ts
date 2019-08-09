import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeListener } from "../model/DescribeListener";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeListenerInput } from "../types/DescribeListenerInput";
import { DescribeListenerOutput } from "../types/DescribeListenerOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/DescribeListenerInput";
export * from "../types/DescribeListenerOutput";
export * from "../types/DescribeListenerExceptionsUnion";

export class DescribeListenerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeListenerInput,
      OutputTypesUnion,
      DescribeListenerOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeListener;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeListenerInput,
    DescribeListenerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeListenerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeListenerInput, DescribeListenerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeListenerInput, DescribeListenerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
