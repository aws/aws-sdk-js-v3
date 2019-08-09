import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClusterSubnetGroups } from "../model/DescribeClusterSubnetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterSubnetGroupsInput } from "../types/DescribeClusterSubnetGroupsInput";
import { DescribeClusterSubnetGroupsOutput } from "../types/DescribeClusterSubnetGroupsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterSubnetGroupsInput";
export * from "../types/DescribeClusterSubnetGroupsOutput";
export * from "../types/DescribeClusterSubnetGroupsExceptionsUnion";

export class DescribeClusterSubnetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterSubnetGroupsInput,
      OutputTypesUnion,
      DescribeClusterSubnetGroupsOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClusterSubnetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterSubnetGroupsInput,
    DescribeClusterSubnetGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClusterSubnetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterSubnetGroupsInput,
    DescribeClusterSubnetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClusterSubnetGroupsInput,
        DescribeClusterSubnetGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
