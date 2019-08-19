import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstancePatches } from "../model/operations/DescribeInstancePatches";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstancePatchesInput } from "../types/DescribeInstancePatchesInput";
import { DescribeInstancePatchesOutput } from "../types/DescribeInstancePatchesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeInstancePatchesInput";
export * from "../types/DescribeInstancePatchesOutput";
export * from "../types/DescribeInstancePatchesExceptionsUnion";

export class DescribeInstancePatchesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstancePatchesInput,
      OutputTypesUnion,
      DescribeInstancePatchesOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstancePatches;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstancePatchesInput,
    DescribeInstancePatchesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstancePatchesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstancePatchesInput,
    DescribeInstancePatchesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInstancePatchesInput, DescribeInstancePatchesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
