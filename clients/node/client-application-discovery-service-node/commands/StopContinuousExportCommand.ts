import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopContinuousExport } from "../model/operations/StopContinuousExport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopContinuousExportInput } from "../types/StopContinuousExportInput";
import { StopContinuousExportOutput } from "../types/StopContinuousExportOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StopContinuousExportInput";
export * from "../types/StopContinuousExportOutput";
export * from "../types/StopContinuousExportExceptionsUnion";

export class StopContinuousExportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopContinuousExportInput,
      OutputTypesUnion,
      StopContinuousExportOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopContinuousExport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopContinuousExportInput,
    StopContinuousExportOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopContinuousExportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopContinuousExportInput,
    StopContinuousExportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopContinuousExportInput, StopContinuousExportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
