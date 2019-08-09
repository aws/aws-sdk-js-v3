import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConditionalForwarders } from "../model/DescribeConditionalForwarders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConditionalForwardersInput } from "../types/DescribeConditionalForwardersInput";
import { DescribeConditionalForwardersOutput } from "../types/DescribeConditionalForwardersOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeConditionalForwardersInput";
export * from "../types/DescribeConditionalForwardersOutput";
export * from "../types/DescribeConditionalForwardersExceptionsUnion";

export class DescribeConditionalForwardersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConditionalForwardersInput,
      OutputTypesUnion,
      DescribeConditionalForwardersOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeConditionalForwarders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConditionalForwardersInput,
    DescribeConditionalForwardersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeConditionalForwardersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConditionalForwardersInput,
    DescribeConditionalForwardersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConditionalForwardersInput,
        DescribeConditionalForwardersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
