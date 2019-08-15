import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVolumes } from "../model/operations/DescribeVolumes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVolumesInput } from "../types/DescribeVolumesInput";
import { DescribeVolumesOutput } from "../types/DescribeVolumesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVolumesInput";
export * from "../types/DescribeVolumesOutput";
export * from "../types/DescribeVolumesExceptionsUnion";

export class DescribeVolumesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVolumesInput,
      OutputTypesUnion,
      DescribeVolumesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVolumes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVolumesInput,
    DescribeVolumesOutput,
    Blob
  >();

  constructor(readonly input: DescribeVolumesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeVolumesInput, DescribeVolumesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVolumesInput, DescribeVolumesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
