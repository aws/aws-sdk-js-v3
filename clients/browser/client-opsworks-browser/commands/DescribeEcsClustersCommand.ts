import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEcsClusters } from "../model/operations/DescribeEcsClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEcsClustersInput } from "../types/DescribeEcsClustersInput";
import { DescribeEcsClustersOutput } from "../types/DescribeEcsClustersOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeEcsClustersInput";
export * from "../types/DescribeEcsClustersOutput";
export * from "../types/DescribeEcsClustersExceptionsUnion";

export class DescribeEcsClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEcsClustersInput,
      OutputTypesUnion,
      DescribeEcsClustersOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEcsClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEcsClustersInput,
    DescribeEcsClustersOutput,
    Blob
  >();

  constructor(readonly input: DescribeEcsClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEcsClustersInput,
    DescribeEcsClustersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEcsClustersInput, DescribeEcsClustersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
