import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateWorkspaces } from "../model/operations/TerminateWorkspaces";
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
      _stream.Readable
    > {
  readonly model = TerminateWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateWorkspacesInput,
    TerminateWorkspacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
