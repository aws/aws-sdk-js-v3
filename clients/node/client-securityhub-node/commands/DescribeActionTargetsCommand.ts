import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeActionTargets } from "../model/DescribeActionTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeActionTargetsInput } from "../types/DescribeActionTargetsInput";
import { DescribeActionTargetsOutput } from "../types/DescribeActionTargetsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DescribeActionTargetsInput";
export * from "../types/DescribeActionTargetsOutput";
export * from "../types/DescribeActionTargetsExceptionsUnion";

export class DescribeActionTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeActionTargetsInput,
      OutputTypesUnion,
      DescribeActionTargetsOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeActionTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeActionTargetsInput,
    DescribeActionTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeActionTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeActionTargetsInput,
    DescribeActionTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeActionTargetsInput, DescribeActionTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
