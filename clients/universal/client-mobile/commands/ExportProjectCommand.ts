import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExportProject } from "../model/ExportProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportProjectInput } from "../types/ExportProjectInput";
import { ExportProjectOutput } from "../types/ExportProjectOutput";
import { MobileResolvedConfiguration } from "../MobileConfiguration";
export * from "../types/ExportProjectInput";
export * from "../types/ExportProjectOutput";
export * from "../types/ExportProjectExceptionsUnion";

export class ExportProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportProjectInput,
      OutputTypesUnion,
      ExportProjectOutput,
      MobileResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ExportProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportProjectInput,
    ExportProjectOutput,
    Uint8Array
  >();

  constructor(readonly input: ExportProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MobileResolvedConfiguration
  ): __aws_sdk_types.Handler<ExportProjectInput, ExportProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExportProjectInput, ExportProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
