import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCollection } from "../model/DescribeCollection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCollectionInput } from "../types/DescribeCollectionInput";
import { DescribeCollectionOutput } from "../types/DescribeCollectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DescribeCollectionInput";
export * from "../types/DescribeCollectionOutput";
export * from "../types/DescribeCollectionExceptionsUnion";

export class DescribeCollectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCollectionInput,
      OutputTypesUnion,
      DescribeCollectionOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCollection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCollectionInput,
    DescribeCollectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCollectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCollectionInput,
    DescribeCollectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCollectionInput, DescribeCollectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
