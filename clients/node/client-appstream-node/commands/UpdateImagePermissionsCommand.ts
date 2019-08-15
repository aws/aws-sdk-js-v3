import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateImagePermissions } from "../model/operations/UpdateImagePermissions";
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
      _stream.Readable
    > {
  readonly model = UpdateImagePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateImagePermissionsInput,
    UpdateImagePermissionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateImagePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
