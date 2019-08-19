import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSessions } from "../model/operations/DescribeSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSessionsInput } from "../types/DescribeSessionsInput";
import { DescribeSessionsOutput } from "../types/DescribeSessionsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeSessionsInput";
export * from "../types/DescribeSessionsOutput";
export * from "../types/DescribeSessionsExceptionsUnion";

export class DescribeSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSessionsInput,
      OutputTypesUnion,
      DescribeSessionsOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSessionsInput,
    DescribeSessionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSessionsInput, DescribeSessionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSessionsInput, DescribeSessionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
