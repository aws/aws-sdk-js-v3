import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DescribeTimeToLive;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTimeToLiveInput,
    DescribeTimeToLiveOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTimeToLiveInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTimeToLiveInput, DescribeTimeToLiveOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
