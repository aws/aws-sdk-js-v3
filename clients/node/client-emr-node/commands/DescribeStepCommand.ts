import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStep } from "../model/operations/DescribeStep";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStepInput } from "../types/DescribeStepInput";
import { DescribeStepOutput } from "../types/DescribeStepOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/DescribeStepInput";
export * from "../types/DescribeStepOutput";
export * from "../types/DescribeStepExceptionsUnion";

export class DescribeStepCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStepInput,
      OutputTypesUnion,
      DescribeStepOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStep;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStepInput,
    DescribeStepOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStepInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStepInput, DescribeStepOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStepInput, DescribeStepOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
