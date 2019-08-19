import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RebootWorkspaces } from "../model/operations/RebootWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootWorkspacesInput } from "../types/RebootWorkspacesInput";
import { RebootWorkspacesOutput } from "../types/RebootWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/RebootWorkspacesInput";
export * from "../types/RebootWorkspacesOutput";
export * from "../types/RebootWorkspacesExceptionsUnion";

export class RebootWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootWorkspacesInput,
      OutputTypesUnion,
      RebootWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RebootWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootWorkspacesInput,
    RebootWorkspacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: RebootWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootWorkspacesInput, RebootWorkspacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootWorkspacesInput, RebootWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
