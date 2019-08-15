import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteNetworkInterface } from "../model/operations/DeleteNetworkInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNetworkInterfaceInput } from "../types/DeleteNetworkInterfaceInput";
import { DeleteNetworkInterfaceOutput } from "../types/DeleteNetworkInterfaceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteNetworkInterfaceInput";
export * from "../types/DeleteNetworkInterfaceOutput";
export * from "../types/DeleteNetworkInterfaceExceptionsUnion";

export class DeleteNetworkInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNetworkInterfaceInput,
      OutputTypesUnion,
      DeleteNetworkInterfaceOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteNetworkInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNetworkInterfaceInput,
    DeleteNetworkInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteNetworkInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNetworkInterfaceInput,
    DeleteNetworkInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNetworkInterfaceInput, DeleteNetworkInterfaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
