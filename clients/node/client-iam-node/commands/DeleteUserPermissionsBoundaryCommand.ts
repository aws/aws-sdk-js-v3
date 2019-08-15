import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUserPermissionsBoundary } from "../model/operations/DeleteUserPermissionsBoundary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserPermissionsBoundaryInput } from "../types/DeleteUserPermissionsBoundaryInput";
import { DeleteUserPermissionsBoundaryOutput } from "../types/DeleteUserPermissionsBoundaryOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteUserPermissionsBoundaryInput";
export * from "../types/DeleteUserPermissionsBoundaryOutput";
export * from "../types/DeleteUserPermissionsBoundaryExceptionsUnion";

export class DeleteUserPermissionsBoundaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserPermissionsBoundaryInput,
      OutputTypesUnion,
      DeleteUserPermissionsBoundaryOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUserPermissionsBoundary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserPermissionsBoundaryInput,
    DeleteUserPermissionsBoundaryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUserPermissionsBoundaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUserPermissionsBoundaryInput,
    DeleteUserPermissionsBoundaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteUserPermissionsBoundaryInput,
        DeleteUserPermissionsBoundaryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
