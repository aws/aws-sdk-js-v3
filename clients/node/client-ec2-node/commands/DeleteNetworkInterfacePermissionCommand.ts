import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteNetworkInterfacePermission } from "../model/DeleteNetworkInterfacePermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNetworkInterfacePermissionInput } from "../types/DeleteNetworkInterfacePermissionInput";
import { DeleteNetworkInterfacePermissionOutput } from "../types/DeleteNetworkInterfacePermissionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteNetworkInterfacePermissionInput";
export * from "../types/DeleteNetworkInterfacePermissionOutput";
export * from "../types/DeleteNetworkInterfacePermissionExceptionsUnion";

export class DeleteNetworkInterfacePermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNetworkInterfacePermissionInput,
      OutputTypesUnion,
      DeleteNetworkInterfacePermissionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteNetworkInterfacePermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNetworkInterfacePermissionInput,
    DeleteNetworkInterfacePermissionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteNetworkInterfacePermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNetworkInterfacePermissionInput,
    DeleteNetworkInterfacePermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteNetworkInterfacePermissionInput,
        DeleteNetworkInterfacePermissionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
