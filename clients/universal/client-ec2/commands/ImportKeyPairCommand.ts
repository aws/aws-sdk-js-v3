import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportKeyPair } from "../model/ImportKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportKeyPairInput } from "../types/ImportKeyPairInput";
import { ImportKeyPairOutput } from "../types/ImportKeyPairOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
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
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ImportKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportKeyPairInput,
    ImportKeyPairOutput,
    Uint8Array
  >();

  constructor(readonly input: ImportKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
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
