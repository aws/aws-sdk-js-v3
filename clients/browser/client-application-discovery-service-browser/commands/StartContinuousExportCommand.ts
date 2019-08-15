import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartContinuousExport } from "../model/operations/StartContinuousExport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartContinuousExportInput } from "../types/StartContinuousExportInput";
import { StartContinuousExportOutput } from "../types/StartContinuousExportOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StartContinuousExportInput";
export * from "../types/StartContinuousExportOutput";
export * from "../types/StartContinuousExportExceptionsUnion";

export class StartContinuousExportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartContinuousExportInput,
      OutputTypesUnion,
      StartContinuousExportOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = StartContinuousExport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartContinuousExportInput,
    StartContinuousExportOutput,
    Blob
  >();

  constructor(readonly input: StartContinuousExportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartContinuousExportInput,
    StartContinuousExportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartContinuousExportInput, StartContinuousExportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
