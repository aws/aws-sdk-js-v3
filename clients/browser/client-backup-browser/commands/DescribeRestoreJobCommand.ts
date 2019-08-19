import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRestoreJob } from "../model/operations/DescribeRestoreJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRestoreJobInput } from "../types/DescribeRestoreJobInput";
import { DescribeRestoreJobOutput } from "../types/DescribeRestoreJobOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DescribeRestoreJobInput";
export * from "../types/DescribeRestoreJobOutput";
export * from "../types/DescribeRestoreJobExceptionsUnion";

export class DescribeRestoreJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRestoreJobInput,
      OutputTypesUnion,
      DescribeRestoreJobOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRestoreJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRestoreJobInput,
    DescribeRestoreJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeRestoreJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRestoreJobInput,
    DescribeRestoreJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRestoreJobInput, DescribeRestoreJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
