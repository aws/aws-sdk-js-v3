import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeUser } from "../model/DescribeUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserInput } from "../types/DescribeUserInput";
import { DescribeUserOutput } from "../types/DescribeUserOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DescribeUserInput";
export * from "../types/DescribeUserOutput";
export * from "../types/DescribeUserExceptionsUnion";

export class DescribeUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserInput,
      OutputTypesUnion,
      DescribeUserOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserInput,
    DescribeUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeUserInput, DescribeUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUserInput, DescribeUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
