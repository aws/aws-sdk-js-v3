import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeObjects } from "../model/DescribeObjects";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeObjectsInput } from "../types/DescribeObjectsInput";
import { DescribeObjectsOutput } from "../types/DescribeObjectsOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/DescribeObjectsInput";
export * from "../types/DescribeObjectsOutput";
export * from "../types/DescribeObjectsExceptionsUnion";

export class DescribeObjectsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeObjectsInput,
      OutputTypesUnion,
      DescribeObjectsOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeObjects;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeObjectsInput,
    DescribeObjectsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeObjectsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeObjectsInput, DescribeObjectsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeObjectsInput, DescribeObjectsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
