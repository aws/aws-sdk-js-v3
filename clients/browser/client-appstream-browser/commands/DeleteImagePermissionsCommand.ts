import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteImagePermissions } from "../model/DeleteImagePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteImagePermissionsInput } from "../types/DeleteImagePermissionsInput";
import { DeleteImagePermissionsOutput } from "../types/DeleteImagePermissionsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DeleteImagePermissionsInput";
export * from "../types/DeleteImagePermissionsOutput";
export * from "../types/DeleteImagePermissionsExceptionsUnion";

export class DeleteImagePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteImagePermissionsInput,
      OutputTypesUnion,
      DeleteImagePermissionsOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteImagePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteImagePermissionsInput,
    DeleteImagePermissionsOutput,
    Blob
  >();

  constructor(readonly input: DeleteImagePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteImagePermissionsInput,
    DeleteImagePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteImagePermissionsInput, DeleteImagePermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
