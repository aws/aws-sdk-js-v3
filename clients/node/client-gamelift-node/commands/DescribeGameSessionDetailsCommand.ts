import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeGameSessionDetails } from "../model/DescribeGameSessionDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGameSessionDetailsInput } from "../types/DescribeGameSessionDetailsInput";
import { DescribeGameSessionDetailsOutput } from "../types/DescribeGameSessionDetailsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeGameSessionDetailsInput";
export * from "../types/DescribeGameSessionDetailsOutput";
export * from "../types/DescribeGameSessionDetailsExceptionsUnion";

export class DescribeGameSessionDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGameSessionDetailsInput,
      OutputTypesUnion,
      DescribeGameSessionDetailsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeGameSessionDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGameSessionDetailsInput,
    DescribeGameSessionDetailsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeGameSessionDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGameSessionDetailsInput,
    DescribeGameSessionDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeGameSessionDetailsInput,
        DescribeGameSessionDetailsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
