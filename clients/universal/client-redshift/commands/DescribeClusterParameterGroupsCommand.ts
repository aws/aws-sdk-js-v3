import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClusterParameterGroups } from "../model/DescribeClusterParameterGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterParameterGroupsInput } from "../types/DescribeClusterParameterGroupsInput";
import { DescribeClusterParameterGroupsOutput } from "../types/DescribeClusterParameterGroupsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterParameterGroupsInput";
export * from "../types/DescribeClusterParameterGroupsOutput";
export * from "../types/DescribeClusterParameterGroupsExceptionsUnion";

export class DescribeClusterParameterGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterParameterGroupsInput,
      OutputTypesUnion,
      DescribeClusterParameterGroupsOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClusterParameterGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterParameterGroupsInput,
    DescribeClusterParameterGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClusterParameterGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterParameterGroupsInput,
    DescribeClusterParameterGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClusterParameterGroupsInput,
        DescribeClusterParameterGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
