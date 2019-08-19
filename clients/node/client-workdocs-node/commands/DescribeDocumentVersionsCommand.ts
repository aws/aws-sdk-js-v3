import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDocumentVersions } from "../model/operations/DescribeDocumentVersions";
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
      _stream.Readable
    > {
  readonly model = DescribeDocumentVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDocumentVersionsInput,
    DescribeDocumentVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDocumentVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
