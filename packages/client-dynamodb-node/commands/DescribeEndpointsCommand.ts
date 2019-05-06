import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEndpoints } from "../model/DescribeEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEndpointsInput } from "../types/DescribeEndpointsInput";
import { DescribeEndpointsOutput } from "../types/DescribeEndpointsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/DescribeEndpointsInput";
export * from "../types/DescribeEndpointsOutput";
export * from "../types/DescribeEndpointsExceptionsUnion";

export class DescribeEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEndpointsInput,
      OutputTypesUnion,
      DescribeEndpointsOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEndpointsInput,
    DescribeEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeEndpointsInput, DescribeEndpointsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEndpointsInput, DescribeEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
