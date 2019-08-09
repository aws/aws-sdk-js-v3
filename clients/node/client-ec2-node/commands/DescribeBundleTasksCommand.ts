import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBundleTasks } from "../model/DescribeBundleTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBundleTasksInput } from "../types/DescribeBundleTasksInput";
import { DescribeBundleTasksOutput } from "../types/DescribeBundleTasksOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeBundleTasksInput";
export * from "../types/DescribeBundleTasksOutput";
export * from "../types/DescribeBundleTasksExceptionsUnion";

export class DescribeBundleTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBundleTasksInput,
      OutputTypesUnion,
      DescribeBundleTasksOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeBundleTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBundleTasksInput,
    DescribeBundleTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBundleTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBundleTasksInput,
    DescribeBundleTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBundleTasksInput, DescribeBundleTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
