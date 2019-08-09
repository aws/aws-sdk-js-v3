import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInventoryDeletions } from "../model/DescribeInventoryDeletions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInventoryDeletionsInput } from "../types/DescribeInventoryDeletionsInput";
import { DescribeInventoryDeletionsOutput } from "../types/DescribeInventoryDeletionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeInventoryDeletionsInput";
export * from "../types/DescribeInventoryDeletionsOutput";
export * from "../types/DescribeInventoryDeletionsExceptionsUnion";

export class DescribeInventoryDeletionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInventoryDeletionsInput,
      OutputTypesUnion,
      DescribeInventoryDeletionsOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeInventoryDeletions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInventoryDeletionsInput,
    DescribeInventoryDeletionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeInventoryDeletionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInventoryDeletionsInput,
    DescribeInventoryDeletionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInventoryDeletionsInput,
        DescribeInventoryDeletionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
