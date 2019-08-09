import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeApplicationSnapshot } from "../model/DescribeApplicationSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeApplicationSnapshotInput } from "../types/DescribeApplicationSnapshotInput";
import { DescribeApplicationSnapshotOutput } from "../types/DescribeApplicationSnapshotOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/DescribeApplicationSnapshotInput";
export * from "../types/DescribeApplicationSnapshotOutput";
export * from "../types/DescribeApplicationSnapshotExceptionsUnion";

export class DescribeApplicationSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeApplicationSnapshotInput,
      OutputTypesUnion,
      DescribeApplicationSnapshotOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeApplicationSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeApplicationSnapshotInput,
    DescribeApplicationSnapshotOutput,
    Blob
  >();

  constructor(readonly input: DescribeApplicationSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeApplicationSnapshotInput,
    DescribeApplicationSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeApplicationSnapshotInput,
        DescribeApplicationSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
