import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportImage } from "../model/ImportImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportImageInput } from "../types/ImportImageInput";
import { ImportImageOutput } from "../types/ImportImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ImportImageInput";
export * from "../types/ImportImageOutput";
export * from "../types/ImportImageExceptionsUnion";

export class ImportImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportImageInput,
      OutputTypesUnion,
      ImportImageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportImageInput,
    ImportImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportImageInput, ImportImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportImageInput, ImportImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
