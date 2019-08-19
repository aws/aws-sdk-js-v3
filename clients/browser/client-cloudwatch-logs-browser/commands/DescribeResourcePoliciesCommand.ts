import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeResourcePolicies } from "../model/operations/DescribeResourcePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeResourcePoliciesInput } from "../types/DescribeResourcePoliciesInput";
import { DescribeResourcePoliciesOutput } from "../types/DescribeResourcePoliciesOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeResourcePoliciesInput";
export * from "../types/DescribeResourcePoliciesOutput";
export * from "../types/DescribeResourcePoliciesExceptionsUnion";

export class DescribeResourcePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeResourcePoliciesInput,
      OutputTypesUnion,
      DescribeResourcePoliciesOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeResourcePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResourcePoliciesInput,
    DescribeResourcePoliciesOutput,
    Blob
  >();

  constructor(readonly input: DescribeResourcePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeResourcePoliciesInput,
    DescribeResourcePoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeResourcePoliciesInput, DescribeResourcePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
