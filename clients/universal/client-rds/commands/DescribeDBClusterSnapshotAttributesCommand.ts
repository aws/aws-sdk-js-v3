import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBClusterSnapshotAttributes } from "../model/DescribeDBClusterSnapshotAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterSnapshotAttributesInput } from "../types/DescribeDBClusterSnapshotAttributesInput";
import { DescribeDBClusterSnapshotAttributesOutput } from "../types/DescribeDBClusterSnapshotAttributesOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBClusterSnapshotAttributesInput";
export * from "../types/DescribeDBClusterSnapshotAttributesOutput";
export * from "../types/DescribeDBClusterSnapshotAttributesExceptionsUnion";

export class DescribeDBClusterSnapshotAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClusterSnapshotAttributesInput,
      OutputTypesUnion,
      DescribeDBClusterSnapshotAttributesOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDBClusterSnapshotAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterSnapshotAttributesInput,
    DescribeDBClusterSnapshotAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDBClusterSnapshotAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClusterSnapshotAttributesInput,
    DescribeDBClusterSnapshotAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBClusterSnapshotAttributesInput,
        DescribeDBClusterSnapshotAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
