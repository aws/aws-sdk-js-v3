import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWorkspaces } from "../model/operations/CreateWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWorkspacesInput } from "../types/CreateWorkspacesInput";
import { CreateWorkspacesOutput } from "../types/CreateWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/CreateWorkspacesInput";
export * from "../types/CreateWorkspacesOutput";
export * from "../types/CreateWorkspacesExceptionsUnion";

export class CreateWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWorkspacesInput,
      OutputTypesUnion,
      CreateWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = CreateWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWorkspacesInput,
    CreateWorkspacesOutput,
    Blob
  >();

  constructor(readonly input: CreateWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWorkspacesInput, CreateWorkspacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWorkspacesInput, CreateWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
