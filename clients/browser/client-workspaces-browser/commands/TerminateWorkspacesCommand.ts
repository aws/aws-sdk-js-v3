import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TerminateWorkspaces } from "../model/TerminateWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateWorkspacesInput } from "../types/TerminateWorkspacesInput";
import { TerminateWorkspacesOutput } from "../types/TerminateWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/TerminateWorkspacesInput";
export * from "../types/TerminateWorkspacesOutput";
export * from "../types/TerminateWorkspacesExceptionsUnion";

export class TerminateWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateWorkspacesInput,
      OutputTypesUnion,
      TerminateWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = TerminateWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateWorkspacesInput,
    TerminateWorkspacesOutput,
    Blob
  >();

  constructor(readonly input: TerminateWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateWorkspacesInput,
    TerminateWorkspacesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateWorkspacesInput, TerminateWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
