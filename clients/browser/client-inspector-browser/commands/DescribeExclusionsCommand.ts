import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeExclusions } from "../model/operations/DescribeExclusions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeExclusionsInput } from "../types/DescribeExclusionsInput";
import { DescribeExclusionsOutput } from "../types/DescribeExclusionsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeExclusionsInput";
export * from "../types/DescribeExclusionsOutput";
export * from "../types/DescribeExclusionsExceptionsUnion";

export class DescribeExclusionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeExclusionsInput,
      OutputTypesUnion,
      DescribeExclusionsOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeExclusions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeExclusionsInput,
    DescribeExclusionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeExclusionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeExclusionsInput,
    DescribeExclusionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeExclusionsInput, DescribeExclusionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
