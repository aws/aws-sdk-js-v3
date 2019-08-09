import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyDocumentPermission } from "../model/ModifyDocumentPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDocumentPermissionInput } from "../types/ModifyDocumentPermissionInput";
import { ModifyDocumentPermissionOutput } from "../types/ModifyDocumentPermissionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ModifyDocumentPermissionInput";
export * from "../types/ModifyDocumentPermissionOutput";
export * from "../types/ModifyDocumentPermissionExceptionsUnion";

export class ModifyDocumentPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDocumentPermissionInput,
      OutputTypesUnion,
      ModifyDocumentPermissionOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyDocumentPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDocumentPermissionInput,
    ModifyDocumentPermissionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyDocumentPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDocumentPermissionInput,
    ModifyDocumentPermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDocumentPermissionInput, ModifyDocumentPermissionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
