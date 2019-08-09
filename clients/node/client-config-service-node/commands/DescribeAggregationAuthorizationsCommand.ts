import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAggregationAuthorizations } from "../model/DescribeAggregationAuthorizations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAggregationAuthorizationsInput } from "../types/DescribeAggregationAuthorizationsInput";
import { DescribeAggregationAuthorizationsOutput } from "../types/DescribeAggregationAuthorizationsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeAggregationAuthorizationsInput";
export * from "../types/DescribeAggregationAuthorizationsOutput";
export * from "../types/DescribeAggregationAuthorizationsExceptionsUnion";

export class DescribeAggregationAuthorizationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAggregationAuthorizationsInput,
      OutputTypesUnion,
      DescribeAggregationAuthorizationsOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAggregationAuthorizations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAggregationAuthorizationsInput,
    DescribeAggregationAuthorizationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAggregationAuthorizationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAggregationAuthorizationsInput,
    DescribeAggregationAuthorizationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAggregationAuthorizationsInput,
        DescribeAggregationAuthorizationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
