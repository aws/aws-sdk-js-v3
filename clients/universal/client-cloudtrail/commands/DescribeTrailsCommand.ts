import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTrails } from "../model/DescribeTrails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrailsInput } from "../types/DescribeTrailsInput";
import { DescribeTrailsOutput } from "../types/DescribeTrailsOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/DescribeTrailsInput";
export * from "../types/DescribeTrailsOutput";
export * from "../types/DescribeTrailsExceptionsUnion";

export class DescribeTrailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrailsInput,
      OutputTypesUnion,
      DescribeTrailsOutput,
      CloudTrailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTrails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrailsInput,
    DescribeTrailsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTrailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTrailsInput, DescribeTrailsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTrailsInput, DescribeTrailsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
