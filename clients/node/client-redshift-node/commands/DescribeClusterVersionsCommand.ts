import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClusterVersions } from "../model/DescribeClusterVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterVersionsInput } from "../types/DescribeClusterVersionsInput";
import { DescribeClusterVersionsOutput } from "../types/DescribeClusterVersionsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterVersionsInput";
export * from "../types/DescribeClusterVersionsOutput";
export * from "../types/DescribeClusterVersionsExceptionsUnion";

export class DescribeClusterVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterVersionsInput,
      OutputTypesUnion,
      DescribeClusterVersionsOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClusterVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterVersionsInput,
    DescribeClusterVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClusterVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterVersionsInput,
    DescribeClusterVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClusterVersionsInput, DescribeClusterVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
