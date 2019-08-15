import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInput } from "../model/operations/DescribeInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInputInput } from "../types/DescribeInputInput";
import { DescribeInputOutput } from "../types/DescribeInputOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DescribeInputInput";
export * from "../types/DescribeInputOutput";
export * from "../types/DescribeInputExceptionsUnion";

export class DescribeInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInputInput,
      OutputTypesUnion,
      DescribeInputOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInputInput,
    DescribeInputOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeInputInput, DescribeInputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInputInput, DescribeInputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
