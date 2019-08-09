import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLoa } from "../model/DescribeLoa";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoaInput } from "../types/DescribeLoaInput";
import { DescribeLoaOutput } from "../types/DescribeLoaOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeLoaInput";
export * from "../types/DescribeLoaOutput";
export * from "../types/DescribeLoaExceptionsUnion";

export class DescribeLoaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoaInput,
      OutputTypesUnion,
      DescribeLoaOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeLoa;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoaInput,
    DescribeLoaOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeLoaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLoaInput, DescribeLoaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLoaInput, DescribeLoaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
