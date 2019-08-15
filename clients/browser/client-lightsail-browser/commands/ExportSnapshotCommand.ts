import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExportSnapshot } from "../model/operations/ExportSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportSnapshotInput } from "../types/ExportSnapshotInput";
import { ExportSnapshotOutput } from "../types/ExportSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/ExportSnapshotInput";
export * from "../types/ExportSnapshotOutput";
export * from "../types/ExportSnapshotExceptionsUnion";

export class ExportSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportSnapshotInput,
      OutputTypesUnion,
      ExportSnapshotOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = ExportSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportSnapshotInput,
    ExportSnapshotOutput,
    Blob
  >();

  constructor(readonly input: ExportSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<ExportSnapshotInput, ExportSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExportSnapshotInput, ExportSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
