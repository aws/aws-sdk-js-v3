import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRegions } from "../model/DescribeRegions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRegionsInput } from "../types/DescribeRegionsInput";
import { DescribeRegionsOutput } from "../types/DescribeRegionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeRegionsInput";
export * from "../types/DescribeRegionsOutput";
export * from "../types/DescribeRegionsExceptionsUnion";

export class DescribeRegionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRegionsInput,
      OutputTypesUnion,
      DescribeRegionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRegions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRegionsInput,
    DescribeRegionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeRegionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRegionsInput, DescribeRegionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRegionsInput, DescribeRegionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
