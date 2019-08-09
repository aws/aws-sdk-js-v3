import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyWorkspaceState } from "../model/ModifyWorkspaceState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyWorkspaceStateInput } from "../types/ModifyWorkspaceStateInput";
import { ModifyWorkspaceStateOutput } from "../types/ModifyWorkspaceStateOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/ModifyWorkspaceStateInput";
export * from "../types/ModifyWorkspaceStateOutput";
export * from "../types/ModifyWorkspaceStateExceptionsUnion";

export class ModifyWorkspaceStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyWorkspaceStateInput,
      OutputTypesUnion,
      ModifyWorkspaceStateOutput,
      WorkSpacesResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyWorkspaceState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyWorkspaceStateInput,
    ModifyWorkspaceStateOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyWorkspaceStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyWorkspaceStateInput,
    ModifyWorkspaceStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyWorkspaceStateInput, ModifyWorkspaceStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
