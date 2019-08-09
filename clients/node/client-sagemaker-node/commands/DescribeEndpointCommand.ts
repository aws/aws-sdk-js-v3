import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEndpoint } from "../model/DescribeEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEndpointInput } from "../types/DescribeEndpointInput";
import { DescribeEndpointOutput } from "../types/DescribeEndpointOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeEndpointInput";
export * from "../types/DescribeEndpointOutput";
export * from "../types/DescribeEndpointExceptionsUnion";

export class DescribeEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEndpointInput,
      OutputTypesUnion,
      DescribeEndpointOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEndpointInput,
    DescribeEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeEndpointInput, DescribeEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEndpointInput, DescribeEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
