import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRecoveryPoint } from "../model/operations/DescribeRecoveryPoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRecoveryPointInput } from "../types/DescribeRecoveryPointInput";
import { DescribeRecoveryPointOutput } from "../types/DescribeRecoveryPointOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DescribeRecoveryPointInput";
export * from "../types/DescribeRecoveryPointOutput";
export * from "../types/DescribeRecoveryPointExceptionsUnion";

export class DescribeRecoveryPointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRecoveryPointInput,
      OutputTypesUnion,
      DescribeRecoveryPointOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRecoveryPoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRecoveryPointInput,
    DescribeRecoveryPointOutput,
    Blob
  >();

  constructor(readonly input: DescribeRecoveryPointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRecoveryPointInput,
    DescribeRecoveryPointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRecoveryPointInput, DescribeRecoveryPointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
