import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEntityRecognizer } from "../model/operations/DescribeEntityRecognizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEntityRecognizerInput } from "../types/DescribeEntityRecognizerInput";
import { DescribeEntityRecognizerOutput } from "../types/DescribeEntityRecognizerOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeEntityRecognizerInput";
export * from "../types/DescribeEntityRecognizerOutput";
export * from "../types/DescribeEntityRecognizerExceptionsUnion";

export class DescribeEntityRecognizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEntityRecognizerInput,
      OutputTypesUnion,
      DescribeEntityRecognizerOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEntityRecognizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEntityRecognizerInput,
    DescribeEntityRecognizerOutput,
    Blob
  >();

  constructor(readonly input: DescribeEntityRecognizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEntityRecognizerInput,
    DescribeEntityRecognizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEntityRecognizerInput, DescribeEntityRecognizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
