import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeApplication } from "../model/DescribeApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationInput } from "../types/DescribeApplicationInput";
import { DescribeApplicationOutput } from "../types/DescribeApplicationOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/DescribeApplicationInput";
export * from "../types/DescribeApplicationOutput";
export * from "../types/DescribeApplicationExceptionsUnion";

export class DescribeApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeApplicationInput,
      OutputTypesUnion,
      DescribeApplicationOutput,
      KinesisAnalyticsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationInput,
    DescribeApplicationOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeApplicationInput,
    DescribeApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeApplicationInput, DescribeApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
