import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTelemetryMetadata } from "../model/operations/GetTelemetryMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTelemetryMetadataInput } from "../types/GetTelemetryMetadataInput";
import { GetTelemetryMetadataOutput } from "../types/GetTelemetryMetadataOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/GetTelemetryMetadataInput";
export * from "../types/GetTelemetryMetadataOutput";
export * from "../types/GetTelemetryMetadataExceptionsUnion";

export class GetTelemetryMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTelemetryMetadataInput,
      OutputTypesUnion,
      GetTelemetryMetadataOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTelemetryMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTelemetryMetadataInput,
    GetTelemetryMetadataOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTelemetryMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTelemetryMetadataInput,
    GetTelemetryMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTelemetryMetadataInput, GetTelemetryMetadataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
