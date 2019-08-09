import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClusterParameters } from "../model/DescribeClusterParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterParametersInput } from "../types/DescribeClusterParametersInput";
import { DescribeClusterParametersOutput } from "../types/DescribeClusterParametersOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterParametersInput";
export * from "../types/DescribeClusterParametersOutput";
export * from "../types/DescribeClusterParametersExceptionsUnion";

export class DescribeClusterParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterParametersInput,
      OutputTypesUnion,
      DescribeClusterParametersOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClusterParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterParametersInput,
    DescribeClusterParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClusterParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterParametersInput,
    DescribeClusterParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClusterParametersInput, DescribeClusterParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
