import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDocumentVersions } from "../model/DescribeDocumentVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDocumentVersionsInput } from "../types/DescribeDocumentVersionsInput";
import { DescribeDocumentVersionsOutput } from "../types/DescribeDocumentVersionsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeDocumentVersionsInput";
export * from "../types/DescribeDocumentVersionsOutput";
export * from "../types/DescribeDocumentVersionsExceptionsUnion";

export class DescribeDocumentVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDocumentVersionsInput,
      OutputTypesUnion,
      DescribeDocumentVersionsOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDocumentVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDocumentVersionsInput,
    DescribeDocumentVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDocumentVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDocumentVersionsInput,
    DescribeDocumentVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDocumentVersionsInput, DescribeDocumentVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
