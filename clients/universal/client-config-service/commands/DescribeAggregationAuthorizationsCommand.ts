import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DescribeAggregationAuthorizations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAggregationAuthorizationsInput,
    DescribeAggregationAuthorizationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAggregationAuthorizationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
