import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConditionalForwarders } from "../model/DescribeConditionalForwarders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConditionalForwardersInput } from "../types/DescribeConditionalForwardersInput";
import { DescribeConditionalForwardersOutput } from "../types/DescribeConditionalForwardersOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeConditionalForwardersInput";
export * from "../types/DescribeConditionalForwardersOutput";
export * from "../types/DescribeConditionalForwardersExceptionsUnion";

export class DescribeConditionalForwardersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConditionalForwardersInput,
      OutputTypesUnion,
      DescribeConditionalForwardersOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConditionalForwarders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConditionalForwardersInput,
    DescribeConditionalForwardersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConditionalForwardersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConditionalForwardersInput,
    DescribeConditionalForwardersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConditionalForwardersInput,
        DescribeConditionalForwardersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
