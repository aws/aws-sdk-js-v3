import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBSnapshotAttributes } from "../model/operations/DescribeDBSnapshotAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBSnapshotAttributesInput } from "../types/DescribeDBSnapshotAttributesInput";
import { DescribeDBSnapshotAttributesOutput } from "../types/DescribeDBSnapshotAttributesOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBSnapshotAttributesInput";
export * from "../types/DescribeDBSnapshotAttributesOutput";
export * from "../types/DescribeDBSnapshotAttributesExceptionsUnion";

export class DescribeDBSnapshotAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBSnapshotAttributesInput,
      OutputTypesUnion,
      DescribeDBSnapshotAttributesOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBSnapshotAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBSnapshotAttributesInput,
    DescribeDBSnapshotAttributesOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBSnapshotAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBSnapshotAttributesInput,
    DescribeDBSnapshotAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBSnapshotAttributesInput,
        DescribeDBSnapshotAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
