import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDocument } from "../model/operations/DescribeDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDocumentInput } from "../types/DescribeDocumentInput";
import { DescribeDocumentOutput } from "../types/DescribeDocumentOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeDocumentInput";
export * from "../types/DescribeDocumentOutput";
export * from "../types/DescribeDocumentExceptionsUnion";

export class DescribeDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDocumentInput,
      OutputTypesUnion,
      DescribeDocumentOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDocumentInput,
    DescribeDocumentOutput,
    Blob
  >();

  constructor(readonly input: DescribeDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDocumentInput, DescribeDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDocumentInput, DescribeDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
