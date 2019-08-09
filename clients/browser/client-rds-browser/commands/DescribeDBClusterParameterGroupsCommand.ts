import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBClusterParameterGroups } from "../model/DescribeDBClusterParameterGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterParameterGroupsInput } from "../types/DescribeDBClusterParameterGroupsInput";
import { DescribeDBClusterParameterGroupsOutput } from "../types/DescribeDBClusterParameterGroupsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBClusterParameterGroupsInput";
export * from "../types/DescribeDBClusterParameterGroupsOutput";
export * from "../types/DescribeDBClusterParameterGroupsExceptionsUnion";

export class DescribeDBClusterParameterGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClusterParameterGroupsInput,
      OutputTypesUnion,
      DescribeDBClusterParameterGroupsOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBClusterParameterGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterParameterGroupsInput,
    DescribeDBClusterParameterGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBClusterParameterGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClusterParameterGroupsInput,
    DescribeDBClusterParameterGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBClusterParameterGroupsInput,
        DescribeDBClusterParameterGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
