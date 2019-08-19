import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConnectionLoa } from "../model/operations/DescribeConnectionLoa";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConnectionLoaInput } from "../types/DescribeConnectionLoaInput";
import { DescribeConnectionLoaOutput } from "../types/DescribeConnectionLoaOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeConnectionLoaInput";
export * from "../types/DescribeConnectionLoaOutput";
export * from "../types/DescribeConnectionLoaExceptionsUnion";

export class DescribeConnectionLoaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConnectionLoaInput,
      OutputTypesUnion,
      DescribeConnectionLoaOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConnectionLoa;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConnectionLoaInput,
    DescribeConnectionLoaOutput,
    Blob
  >();

  constructor(readonly input: DescribeConnectionLoaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConnectionLoaInput,
    DescribeConnectionLoaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConnectionLoaInput, DescribeConnectionLoaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
