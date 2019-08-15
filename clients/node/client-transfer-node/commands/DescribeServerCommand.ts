import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeServer } from "../model/operations/DescribeServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServerInput } from "../types/DescribeServerInput";
import { DescribeServerOutput } from "../types/DescribeServerOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/DescribeServerInput";
export * from "../types/DescribeServerOutput";
export * from "../types/DescribeServerExceptionsUnion";

export class DescribeServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServerInput,
      OutputTypesUnion,
      DescribeServerOutput,
      TransferResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServerInput,
    DescribeServerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeServerInput, DescribeServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeServerInput, DescribeServerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
