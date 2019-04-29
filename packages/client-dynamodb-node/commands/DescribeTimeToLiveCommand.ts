import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTimeToLive } from "../model/DescribeTimeToLive";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTimeToLiveInput } from "../types/DescribeTimeToLiveInput";
import { DescribeTimeToLiveOutput } from "../types/DescribeTimeToLiveOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/DescribeTimeToLiveInput";
export * from "../types/DescribeTimeToLiveOutput";
export * from "../types/DescribeTimeToLiveExceptionsUnion";

export class DescribeTimeToLiveCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTimeToLiveInput,
      OutputTypesUnion,
      DescribeTimeToLiveOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTimeToLiveInput,
    DescribeTimeToLiveOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTimeToLiveInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTimeToLiveInput,
    DescribeTimeToLiveOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DescribeTimeToLive
    };

    return stack.resolve(
      handler<DescribeTimeToLiveInput, DescribeTimeToLiveOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
