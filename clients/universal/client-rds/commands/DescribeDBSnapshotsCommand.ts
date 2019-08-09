import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBSnapshots } from "../model/DescribeDBSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBSnapshotsInput } from "../types/DescribeDBSnapshotsInput";
import { DescribeDBSnapshotsOutput } from "../types/DescribeDBSnapshotsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBSnapshotsInput";
export * from "../types/DescribeDBSnapshotsOutput";
export * from "../types/DescribeDBSnapshotsExceptionsUnion";

export class DescribeDBSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBSnapshotsInput,
      OutputTypesUnion,
      DescribeDBSnapshotsOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDBSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBSnapshotsInput,
    DescribeDBSnapshotsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDBSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBSnapshotsInput,
    DescribeDBSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBSnapshotsInput, DescribeDBSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
