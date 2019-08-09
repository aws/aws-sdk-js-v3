import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackSet } from "../model/DescribeStackSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackSetInput } from "../types/DescribeStackSetInput";
import { DescribeStackSetOutput } from "../types/DescribeStackSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackSetInput";
export * from "../types/DescribeStackSetOutput";
export * from "../types/DescribeStackSetExceptionsUnion";

export class DescribeStackSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackSetInput,
      OutputTypesUnion,
      DescribeStackSetOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeStackSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackSetInput,
    DescribeStackSetOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeStackSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStackSetInput, DescribeStackSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackSetInput, DescribeStackSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
