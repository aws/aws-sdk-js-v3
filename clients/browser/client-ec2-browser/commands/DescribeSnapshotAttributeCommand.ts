import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSnapshotAttribute } from "../model/DescribeSnapshotAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSnapshotAttributeInput } from "../types/DescribeSnapshotAttributeInput";
import { DescribeSnapshotAttributeOutput } from "../types/DescribeSnapshotAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSnapshotAttributeInput";
export * from "../types/DescribeSnapshotAttributeOutput";
export * from "../types/DescribeSnapshotAttributeExceptionsUnion";

export class DescribeSnapshotAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSnapshotAttributeInput,
      OutputTypesUnion,
      DescribeSnapshotAttributeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSnapshotAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSnapshotAttributeInput,
    DescribeSnapshotAttributeOutput,
    Blob
  >();

  constructor(readonly input: DescribeSnapshotAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSnapshotAttributeInput,
    DescribeSnapshotAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSnapshotAttributeInput, DescribeSnapshotAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
