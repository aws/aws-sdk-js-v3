import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSnapshotSchedules } from "../model/operations/DescribeSnapshotSchedules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSnapshotSchedulesInput } from "../types/DescribeSnapshotSchedulesInput";
import { DescribeSnapshotSchedulesOutput } from "../types/DescribeSnapshotSchedulesOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeSnapshotSchedulesInput";
export * from "../types/DescribeSnapshotSchedulesOutput";
export * from "../types/DescribeSnapshotSchedulesExceptionsUnion";

export class DescribeSnapshotSchedulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSnapshotSchedulesInput,
      OutputTypesUnion,
      DescribeSnapshotSchedulesOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSnapshotSchedules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSnapshotSchedulesInput,
    DescribeSnapshotSchedulesOutput,
    Blob
  >();

  constructor(readonly input: DescribeSnapshotSchedulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSnapshotSchedulesInput,
    DescribeSnapshotSchedulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSnapshotSchedulesInput, DescribeSnapshotSchedulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
