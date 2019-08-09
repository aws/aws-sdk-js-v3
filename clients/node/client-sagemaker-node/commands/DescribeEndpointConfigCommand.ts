import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEndpointConfig } from "../model/DescribeEndpointConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEndpointConfigInput } from "../types/DescribeEndpointConfigInput";
import { DescribeEndpointConfigOutput } from "../types/DescribeEndpointConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeEndpointConfigInput";
export * from "../types/DescribeEndpointConfigOutput";
export * from "../types/DescribeEndpointConfigExceptionsUnion";

export class DescribeEndpointConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEndpointConfigInput,
      OutputTypesUnion,
      DescribeEndpointConfigOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEndpointConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEndpointConfigInput,
    DescribeEndpointConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEndpointConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEndpointConfigInput,
    DescribeEndpointConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEndpointConfigInput, DescribeEndpointConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
