import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeClusterDbRevisions } from "../model/DescribeClusterDbRevisions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterDbRevisionsInput } from "../types/DescribeClusterDbRevisionsInput";
import { DescribeClusterDbRevisionsOutput } from "../types/DescribeClusterDbRevisionsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterDbRevisionsInput";
export * from "../types/DescribeClusterDbRevisionsOutput";
export * from "../types/DescribeClusterDbRevisionsExceptionsUnion";

export class DescribeClusterDbRevisionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterDbRevisionsInput,
      OutputTypesUnion,
      DescribeClusterDbRevisionsOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeClusterDbRevisions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterDbRevisionsInput,
    DescribeClusterDbRevisionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeClusterDbRevisionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterDbRevisionsInput,
    DescribeClusterDbRevisionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClusterDbRevisionsInput,
        DescribeClusterDbRevisionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
