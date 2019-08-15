import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeResourceGroups } from "../model/operations/DescribeResourceGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeResourceGroupsInput } from "../types/DescribeResourceGroupsInput";
import { DescribeResourceGroupsOutput } from "../types/DescribeResourceGroupsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeResourceGroupsInput";
export * from "../types/DescribeResourceGroupsOutput";
export * from "../types/DescribeResourceGroupsExceptionsUnion";

export class DescribeResourceGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeResourceGroupsInput,
      OutputTypesUnion,
      DescribeResourceGroupsOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeResourceGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResourceGroupsInput,
    DescribeResourceGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeResourceGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeResourceGroupsInput,
    DescribeResourceGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeResourceGroupsInput, DescribeResourceGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
