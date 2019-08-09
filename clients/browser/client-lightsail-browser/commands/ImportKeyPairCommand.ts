import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportKeyPair } from "../model/ImportKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportKeyPairInput } from "../types/ImportKeyPairInput";
import { ImportKeyPairOutput } from "../types/ImportKeyPairOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/ImportKeyPairInput";
export * from "../types/ImportKeyPairOutput";
export * from "../types/ImportKeyPairExceptionsUnion";

export class ImportKeyPairCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportKeyPairInput,
      OutputTypesUnion,
      ImportKeyPairOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = ImportKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportKeyPairInput,
    ImportKeyPairOutput,
    Blob
  >();

  constructor(readonly input: ImportKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportKeyPairInput, ImportKeyPairOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportKeyPairInput, ImportKeyPairOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
