import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportTerminology } from "../model/operations/ImportTerminology";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportTerminologyInput } from "../types/ImportTerminologyInput";
import { ImportTerminologyOutput } from "../types/ImportTerminologyOutput";
import { TranslateResolvedConfiguration } from "../TranslateConfiguration";
export * from "../types/ImportTerminologyInput";
export * from "../types/ImportTerminologyOutput";
export * from "../types/ImportTerminologyExceptionsUnion";

export class ImportTerminologyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportTerminologyInput,
      OutputTypesUnion,
      ImportTerminologyOutput,
      TranslateResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportTerminology;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportTerminologyInput,
    ImportTerminologyOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportTerminologyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranslateResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportTerminologyInput, ImportTerminologyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportTerminologyInput, ImportTerminologyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
