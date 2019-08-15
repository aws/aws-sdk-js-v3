import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeImages } from "../model/operations/DescribeImages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImagesInput } from "../types/DescribeImagesInput";
import { DescribeImagesOutput } from "../types/DescribeImagesOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeImagesInput";
export * from "../types/DescribeImagesOutput";
export * from "../types/DescribeImagesExceptionsUnion";

export class DescribeImagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImagesInput,
      OutputTypesUnion,
      DescribeImagesOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeImages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImagesInput,
    DescribeImagesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeImagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeImagesInput, DescribeImagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeImagesInput, DescribeImagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
