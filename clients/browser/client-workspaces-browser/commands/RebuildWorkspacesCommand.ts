import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebuildWorkspaces } from "../model/RebuildWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebuildWorkspacesInput } from "../types/RebuildWorkspacesInput";
import { RebuildWorkspacesOutput } from "../types/RebuildWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/RebuildWorkspacesInput";
export * from "../types/RebuildWorkspacesOutput";
export * from "../types/RebuildWorkspacesExceptionsUnion";

export class RebuildWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebuildWorkspacesInput,
      OutputTypesUnion,
      RebuildWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = RebuildWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebuildWorkspacesInput,
    RebuildWorkspacesOutput,
    Blob
  >();

  constructor(readonly input: RebuildWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<RebuildWorkspacesInput, RebuildWorkspacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebuildWorkspacesInput, RebuildWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
