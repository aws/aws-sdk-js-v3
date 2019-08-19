import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeApplication } from "../model/operations/DescribeApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationInput } from "../types/DescribeApplicationInput";
import { DescribeApplicationOutput } from "../types/DescribeApplicationOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
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
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationInput,
    DescribeApplicationOutput,
    Blob
  >();

  constructor(readonly input: DescribeApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
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
