import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSecurityGroups } from "../model/DescribeSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSecurityGroupsInput } from "../types/DescribeSecurityGroupsInput";
import { DescribeSecurityGroupsOutput } from "../types/DescribeSecurityGroupsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSecurityGroupsInput";
export * from "../types/DescribeSecurityGroupsOutput";
export * from "../types/DescribeSecurityGroupsExceptionsUnion";

export class DescribeSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSecurityGroupsInput,
      OutputTypesUnion,
      DescribeSecurityGroupsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSecurityGroupsInput,
    DescribeSecurityGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSecurityGroupsInput,
    DescribeSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSecurityGroupsInput, DescribeSecurityGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
