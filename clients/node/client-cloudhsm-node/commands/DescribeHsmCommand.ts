import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeHsm } from "../model/DescribeHsm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHsmInput } from "../types/DescribeHsmInput";
import { DescribeHsmOutput } from "../types/DescribeHsmOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/DescribeHsmInput";
export * from "../types/DescribeHsmOutput";
export * from "../types/DescribeHsmExceptionsUnion";

export class DescribeHsmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHsmInput,
      OutputTypesUnion,
      DescribeHsmOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeHsm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHsmInput,
    DescribeHsmOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeHsmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeHsmInput, DescribeHsmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHsmInput, DescribeHsmOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
