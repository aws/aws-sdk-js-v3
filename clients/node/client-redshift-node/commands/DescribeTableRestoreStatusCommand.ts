import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTableRestoreStatus } from "../model/operations/DescribeTableRestoreStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTableRestoreStatusInput } from "../types/DescribeTableRestoreStatusInput";
import { DescribeTableRestoreStatusOutput } from "../types/DescribeTableRestoreStatusOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeTableRestoreStatusInput";
export * from "../types/DescribeTableRestoreStatusOutput";
export * from "../types/DescribeTableRestoreStatusExceptionsUnion";

export class DescribeTableRestoreStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTableRestoreStatusInput,
      OutputTypesUnion,
      DescribeTableRestoreStatusOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTableRestoreStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTableRestoreStatusInput,
    DescribeTableRestoreStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTableRestoreStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTableRestoreStatusInput,
    DescribeTableRestoreStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTableRestoreStatusInput,
        DescribeTableRestoreStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
