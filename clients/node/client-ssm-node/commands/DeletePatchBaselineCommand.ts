import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = DeletePatchBaseline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePatchBaselineInput,
    DeletePatchBaselineOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePatchBaselineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
