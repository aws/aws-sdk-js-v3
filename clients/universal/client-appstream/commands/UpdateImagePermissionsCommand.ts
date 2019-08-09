import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateImagePermissions } from "../model/UpdateImagePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateImagePermissionsInput } from "../types/UpdateImagePermissionsInput";
import { UpdateImagePermissionsOutput } from "../types/UpdateImagePermissionsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/UpdateImagePermissionsInput";
export * from "../types/UpdateImagePermissionsOutput";
export * from "../types/UpdateImagePermissionsExceptionsUnion";

export class UpdateImagePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateImagePermissionsInput,
      OutputTypesUnion,
      UpdateImagePermissionsOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateImagePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateImagePermissionsInput,
    UpdateImagePermissionsOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateImagePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateImagePermissionsInput,
    UpdateImagePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateImagePermissionsInput, UpdateImagePermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
