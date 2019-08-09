import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutTelemetryRecords } from "../model/PutTelemetryRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutTelemetryRecordsInput } from "../types/PutTelemetryRecordsInput";
import { PutTelemetryRecordsOutput } from "../types/PutTelemetryRecordsOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/PutTelemetryRecordsInput";
export * from "../types/PutTelemetryRecordsOutput";
export * from "../types/PutTelemetryRecordsExceptionsUnion";

export class PutTelemetryRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutTelemetryRecordsInput,
      OutputTypesUnion,
      PutTelemetryRecordsOutput,
      XRayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutTelemetryRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutTelemetryRecordsInput,
    PutTelemetryRecordsOutput,
    Uint8Array
  >();

  constructor(readonly input: PutTelemetryRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutTelemetryRecordsInput,
    PutTelemetryRecordsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutTelemetryRecordsInput, PutTelemetryRecordsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
