import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportInstance } from "../model/operations/ImportInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportInstanceInput } from "../types/ImportInstanceInput";
import { ImportInstanceOutput } from "../types/ImportInstanceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ImportInstanceInput";
export * from "../types/ImportInstanceOutput";
export * from "../types/ImportInstanceExceptionsUnion";

export class ImportInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportInstanceInput,
      OutputTypesUnion,
      ImportInstanceOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ImportInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportInstanceInput,
    ImportInstanceOutput,
    Blob
  >();

  constructor(readonly input: ImportInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportInstanceInput, ImportInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportInstanceInput, ImportInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
