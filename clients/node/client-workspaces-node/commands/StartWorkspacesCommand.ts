import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartWorkspaces } from "../model/StartWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartWorkspacesInput } from "../types/StartWorkspacesInput";
import { StartWorkspacesOutput } from "../types/StartWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/StartWorkspacesInput";
export * from "../types/StartWorkspacesOutput";
export * from "../types/StartWorkspacesExceptionsUnion";

export class StartWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartWorkspacesInput,
      OutputTypesUnion,
      StartWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartWorkspacesInput,
    StartWorkspacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<StartWorkspacesInput, StartWorkspacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartWorkspacesInput, StartWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
