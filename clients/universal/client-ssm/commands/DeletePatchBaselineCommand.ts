import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePatchBaseline } from "../model/DeletePatchBaseline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePatchBaselineInput } from "../types/DeletePatchBaselineInput";
import { DeletePatchBaselineOutput } from "../types/DeletePatchBaselineOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeletePatchBaselineInput";
export * from "../types/DeletePatchBaselineOutput";
export * from "../types/DeletePatchBaselineExceptionsUnion";

export class DeletePatchBaselineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePatchBaselineInput,
      OutputTypesUnion,
      DeletePatchBaselineOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeletePatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePatchBaselineInput,
    DeletePatchBaselineOutput,
    Uint8Array
  >();

  constructor(readonly input: DeletePatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePatchBaselineInput,
    DeletePatchBaselineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePatchBaselineInput, DeletePatchBaselineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
