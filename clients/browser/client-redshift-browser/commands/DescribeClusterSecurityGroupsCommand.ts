import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClusterSecurityGroups } from "../model/operations/DescribeClusterSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterSecurityGroupsInput } from "../types/DescribeClusterSecurityGroupsInput";
import { DescribeClusterSecurityGroupsOutput } from "../types/DescribeClusterSecurityGroupsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterSecurityGroupsInput";
export * from "../types/DescribeClusterSecurityGroupsOutput";
export * from "../types/DescribeClusterSecurityGroupsExceptionsUnion";

export class DescribeClusterSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterSecurityGroupsInput,
      OutputTypesUnion,
      DescribeClusterSecurityGroupsOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeClusterSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterSecurityGroupsInput,
    DescribeClusterSecurityGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeClusterSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterSecurityGroupsInput,
    DescribeClusterSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClusterSecurityGroupsInput,
        DescribeClusterSecurityGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
