import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeActivityType } from "../model/operations/DescribeActivityType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeActivityTypeInput } from "../types/DescribeActivityTypeInput";
import { DescribeActivityTypeOutput } from "../types/DescribeActivityTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/DescribeActivityTypeInput";
export * from "../types/DescribeActivityTypeOutput";
export * from "../types/DescribeActivityTypeExceptionsUnion";

export class DescribeActivityTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeActivityTypeInput,
      OutputTypesUnion,
      DescribeActivityTypeOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeActivityType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeActivityTypeInput,
    DescribeActivityTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeActivityTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeActivityTypeInput,
    DescribeActivityTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeActivityTypeInput, DescribeActivityTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
