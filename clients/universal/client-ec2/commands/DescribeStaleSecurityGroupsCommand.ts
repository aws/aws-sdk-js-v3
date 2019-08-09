import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStaleSecurityGroups } from "../model/DescribeStaleSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStaleSecurityGroupsInput } from "../types/DescribeStaleSecurityGroupsInput";
import { DescribeStaleSecurityGroupsOutput } from "../types/DescribeStaleSecurityGroupsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeStaleSecurityGroupsInput";
export * from "../types/DescribeStaleSecurityGroupsOutput";
export * from "../types/DescribeStaleSecurityGroupsExceptionsUnion";

export class DescribeStaleSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStaleSecurityGroupsInput,
      OutputTypesUnion,
      DescribeStaleSecurityGroupsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeStaleSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStaleSecurityGroupsInput,
    DescribeStaleSecurityGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeStaleSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStaleSecurityGroupsInput,
    DescribeStaleSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeStaleSecurityGroupsInput,
        DescribeStaleSecurityGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
