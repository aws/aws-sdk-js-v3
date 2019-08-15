import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartExportTask } from "../model/operations/StartExportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartExportTaskInput } from "../types/StartExportTaskInput";
import { StartExportTaskOutput } from "../types/StartExportTaskOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StartExportTaskInput";
export * from "../types/StartExportTaskOutput";
export * from "../types/StartExportTaskExceptionsUnion";

export class StartExportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartExportTaskInput,
      OutputTypesUnion,
      StartExportTaskOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartExportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartExportTaskInput,
    StartExportTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartExportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<StartExportTaskInput, StartExportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartExportTaskInput, StartExportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
