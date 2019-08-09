import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeImageBuilders } from "../model/DescribeImageBuilders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImageBuildersInput } from "../types/DescribeImageBuildersInput";
import { DescribeImageBuildersOutput } from "../types/DescribeImageBuildersOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeImageBuildersInput";
export * from "../types/DescribeImageBuildersOutput";
export * from "../types/DescribeImageBuildersExceptionsUnion";

export class DescribeImageBuildersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImageBuildersInput,
      OutputTypesUnion,
      DescribeImageBuildersOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeImageBuilders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImageBuildersInput,
    DescribeImageBuildersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeImageBuildersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeImageBuildersInput,
    DescribeImageBuildersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeImageBuildersInput, DescribeImageBuildersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
