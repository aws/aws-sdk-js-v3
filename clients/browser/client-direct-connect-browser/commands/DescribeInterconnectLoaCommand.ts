import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInterconnectLoa } from "../model/operations/DescribeInterconnectLoa";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInterconnectLoaInput } from "../types/DescribeInterconnectLoaInput";
import { DescribeInterconnectLoaOutput } from "../types/DescribeInterconnectLoaOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeInterconnectLoaInput";
export * from "../types/DescribeInterconnectLoaOutput";
export * from "../types/DescribeInterconnectLoaExceptionsUnion";

export class DescribeInterconnectLoaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInterconnectLoaInput,
      OutputTypesUnion,
      DescribeInterconnectLoaOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeInterconnectLoa;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInterconnectLoaInput,
    DescribeInterconnectLoaOutput,
    Blob
  >();

  constructor(readonly input: DescribeInterconnectLoaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInterconnectLoaInput,
    DescribeInterconnectLoaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInterconnectLoaInput, DescribeInterconnectLoaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
