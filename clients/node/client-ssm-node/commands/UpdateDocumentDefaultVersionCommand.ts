import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDocumentDefaultVersion } from "../model/UpdateDocumentDefaultVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentDefaultVersionInput } from "../types/UpdateDocumentDefaultVersionInput";
import { UpdateDocumentDefaultVersionOutput } from "../types/UpdateDocumentDefaultVersionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateDocumentDefaultVersionInput";
export * from "../types/UpdateDocumentDefaultVersionOutput";
export * from "../types/UpdateDocumentDefaultVersionExceptionsUnion";

export class UpdateDocumentDefaultVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentDefaultVersionInput,
      OutputTypesUnion,
      UpdateDocumentDefaultVersionOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDocumentDefaultVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentDefaultVersionInput,
    UpdateDocumentDefaultVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDocumentDefaultVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDocumentDefaultVersionInput,
    UpdateDocumentDefaultVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateDocumentDefaultVersionInput,
        UpdateDocumentDefaultVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
