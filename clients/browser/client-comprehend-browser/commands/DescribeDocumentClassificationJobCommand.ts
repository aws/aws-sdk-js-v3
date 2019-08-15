import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDocumentClassificationJob } from "../model/operations/DescribeDocumentClassificationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDocumentClassificationJobInput } from "../types/DescribeDocumentClassificationJobInput";
import { DescribeDocumentClassificationJobOutput } from "../types/DescribeDocumentClassificationJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeDocumentClassificationJobInput";
export * from "../types/DescribeDocumentClassificationJobOutput";
export * from "../types/DescribeDocumentClassificationJobExceptionsUnion";

export class DescribeDocumentClassificationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDocumentClassificationJobInput,
      OutputTypesUnion,
      DescribeDocumentClassificationJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDocumentClassificationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDocumentClassificationJobInput,
    DescribeDocumentClassificationJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeDocumentClassificationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDocumentClassificationJobInput,
    DescribeDocumentClassificationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDocumentClassificationJobInput,
        DescribeDocumentClassificationJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
