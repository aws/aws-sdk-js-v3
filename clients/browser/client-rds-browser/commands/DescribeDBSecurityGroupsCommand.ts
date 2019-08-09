import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBSecurityGroups } from "../model/DescribeDBSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBSecurityGroupsInput } from "../types/DescribeDBSecurityGroupsInput";
import { DescribeDBSecurityGroupsOutput } from "../types/DescribeDBSecurityGroupsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBSecurityGroupsInput";
export * from "../types/DescribeDBSecurityGroupsOutput";
export * from "../types/DescribeDBSecurityGroupsExceptionsUnion";

export class DescribeDBSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBSecurityGroupsInput,
      OutputTypesUnion,
      DescribeDBSecurityGroupsOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBSecurityGroupsInput,
    DescribeDBSecurityGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBSecurityGroupsInput,
    DescribeDBSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBSecurityGroupsInput, DescribeDBSecurityGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
