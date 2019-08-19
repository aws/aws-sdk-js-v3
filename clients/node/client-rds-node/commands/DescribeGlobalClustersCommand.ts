import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeGlobalClusters } from "../model/operations/DescribeGlobalClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGlobalClustersInput } from "../types/DescribeGlobalClustersInput";
import { DescribeGlobalClustersOutput } from "../types/DescribeGlobalClustersOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeGlobalClustersInput";
export * from "../types/DescribeGlobalClustersOutput";
export * from "../types/DescribeGlobalClustersExceptionsUnion";

export class DescribeGlobalClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGlobalClustersInput,
      OutputTypesUnion,
      DescribeGlobalClustersOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeGlobalClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGlobalClustersInput,
    DescribeGlobalClustersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeGlobalClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGlobalClustersInput,
    DescribeGlobalClustersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeGlobalClustersInput, DescribeGlobalClustersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
