import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetExportSnapshotRecords } from "../model/GetExportSnapshotRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetExportSnapshotRecordsInput } from "../types/GetExportSnapshotRecordsInput";
import { GetExportSnapshotRecordsOutput } from "../types/GetExportSnapshotRecordsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetExportSnapshotRecordsInput";
export * from "../types/GetExportSnapshotRecordsOutput";
export * from "../types/GetExportSnapshotRecordsExceptionsUnion";

export class GetExportSnapshotRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetExportSnapshotRecordsInput,
      OutputTypesUnion,
      GetExportSnapshotRecordsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetExportSnapshotRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetExportSnapshotRecordsInput,
    GetExportSnapshotRecordsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetExportSnapshotRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetExportSnapshotRecordsInput,
    GetExportSnapshotRecordsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetExportSnapshotRecordsInput, GetExportSnapshotRecordsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
