import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeActivations } from "../model/operations/DescribeActivations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeActivationsInput } from "../types/DescribeActivationsInput";
import { DescribeActivationsOutput } from "../types/DescribeActivationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeActivationsInput";
export * from "../types/DescribeActivationsOutput";
export * from "../types/DescribeActivationsExceptionsUnion";

export class DescribeActivationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeActivationsInput,
      OutputTypesUnion,
      DescribeActivationsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeActivations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeActivationsInput,
    DescribeActivationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeActivationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeActivationsInput,
    DescribeActivationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeActivationsInput, DescribeActivationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
