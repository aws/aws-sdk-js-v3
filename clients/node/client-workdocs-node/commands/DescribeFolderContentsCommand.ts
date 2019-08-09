import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFolderContents } from "../model/DescribeFolderContents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFolderContentsInput } from "../types/DescribeFolderContentsInput";
import { DescribeFolderContentsOutput } from "../types/DescribeFolderContentsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeFolderContentsInput";
export * from "../types/DescribeFolderContentsOutput";
export * from "../types/DescribeFolderContentsExceptionsUnion";

export class DescribeFolderContentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFolderContentsInput,
      OutputTypesUnion,
      DescribeFolderContentsOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFolderContents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFolderContentsInput,
    DescribeFolderContentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFolderContentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFolderContentsInput,
    DescribeFolderContentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFolderContentsInput, DescribeFolderContentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
