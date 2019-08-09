import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartImportTask } from "../model/StartImportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartImportTaskInput } from "../types/StartImportTaskInput";
import { StartImportTaskOutput } from "../types/StartImportTaskOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StartImportTaskInput";
export * from "../types/StartImportTaskOutput";
export * from "../types/StartImportTaskExceptionsUnion";

export class StartImportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartImportTaskInput,
      OutputTypesUnion,
      StartImportTaskOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartImportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartImportTaskInput,
    StartImportTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: StartImportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<StartImportTaskInput, StartImportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartImportTaskInput, StartImportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
