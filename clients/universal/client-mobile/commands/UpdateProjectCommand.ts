import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateProject } from "../model/UpdateProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProjectInput } from "../types/UpdateProjectInput";
import { UpdateProjectOutput } from "../types/UpdateProjectOutput";
import { MobileResolvedConfiguration } from "../MobileConfiguration";
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
      MobileResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProjectInput,
    UpdateProjectOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MobileResolvedConfiguration
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
