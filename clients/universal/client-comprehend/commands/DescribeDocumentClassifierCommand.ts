import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDocumentClassifier } from "../model/DescribeDocumentClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDocumentClassifierInput } from "../types/DescribeDocumentClassifierInput";
import { DescribeDocumentClassifierOutput } from "../types/DescribeDocumentClassifierOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeDocumentClassifierInput";
export * from "../types/DescribeDocumentClassifierOutput";
export * from "../types/DescribeDocumentClassifierExceptionsUnion";

export class DescribeDocumentClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDocumentClassifierInput,
      OutputTypesUnion,
      DescribeDocumentClassifierOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDocumentClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDocumentClassifierInput,
    DescribeDocumentClassifierOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDocumentClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDocumentClassifierInput,
    DescribeDocumentClassifierOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDocumentClassifierInput,
        DescribeDocumentClassifierOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
