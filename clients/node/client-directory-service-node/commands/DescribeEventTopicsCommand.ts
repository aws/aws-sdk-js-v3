import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEventTopics } from "../model/DescribeEventTopics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventTopicsInput } from "../types/DescribeEventTopicsInput";
import { DescribeEventTopicsOutput } from "../types/DescribeEventTopicsOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeEventTopicsInput";
export * from "../types/DescribeEventTopicsOutput";
export * from "../types/DescribeEventTopicsExceptionsUnion";

export class DescribeEventTopicsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventTopicsInput,
      OutputTypesUnion,
      DescribeEventTopicsOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEventTopics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventTopicsInput,
    DescribeEventTopicsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEventTopicsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventTopicsInput,
    DescribeEventTopicsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventTopicsInput, DescribeEventTopicsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
