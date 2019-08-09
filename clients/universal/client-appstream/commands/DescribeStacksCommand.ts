import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStacks } from "../model/DescribeStacks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStacksInput } from "../types/DescribeStacksInput";
import { DescribeStacksOutput } from "../types/DescribeStacksOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeStacksInput";
export * from "../types/DescribeStacksOutput";
export * from "../types/DescribeStacksExceptionsUnion";

export class DescribeStacksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStacksInput,
      OutputTypesUnion,
      DescribeStacksOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeStacks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStacksInput,
    DescribeStacksOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeStacksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStacksInput, DescribeStacksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStacksInput, DescribeStacksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
