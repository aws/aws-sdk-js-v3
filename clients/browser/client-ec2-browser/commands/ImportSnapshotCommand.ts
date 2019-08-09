import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportSnapshot } from "../model/ImportSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportSnapshotInput } from "../types/ImportSnapshotInput";
import { ImportSnapshotOutput } from "../types/ImportSnapshotOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ImportSnapshotInput";
export * from "../types/ImportSnapshotOutput";
export * from "../types/ImportSnapshotExceptionsUnion";

export class ImportSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportSnapshotInput,
      OutputTypesUnion,
      ImportSnapshotOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ImportSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportSnapshotInput,
    ImportSnapshotOutput,
    Blob
  >();

  constructor(readonly input: ImportSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportSnapshotInput, ImportSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportSnapshotInput, ImportSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
