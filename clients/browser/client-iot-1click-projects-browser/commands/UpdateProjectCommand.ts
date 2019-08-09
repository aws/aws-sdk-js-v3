import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateProject } from "../model/UpdateProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProjectInput } from "../types/UpdateProjectInput";
import { UpdateProjectOutput } from "../types/UpdateProjectOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/UpdateProjectInput";
export * from "../types/UpdateProjectOutput";
export * from "../types/UpdateProjectExceptionsUnion";

export class UpdateProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateProjectInput,
      OutputTypesUnion,
      UpdateProjectOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProjectInput,
    UpdateProjectOutput,
    Blob
  >();

  constructor(readonly input: UpdateProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateProjectInput, UpdateProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateProjectInput, UpdateProjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
