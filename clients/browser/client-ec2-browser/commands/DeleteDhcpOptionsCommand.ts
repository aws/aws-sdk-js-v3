import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDhcpOptions } from "../model/operations/DeleteDhcpOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDhcpOptionsInput } from "../types/DeleteDhcpOptionsInput";
import { DeleteDhcpOptionsOutput } from "../types/DeleteDhcpOptionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteDhcpOptionsInput";
export * from "../types/DeleteDhcpOptionsOutput";
export * from "../types/DeleteDhcpOptionsExceptionsUnion";

export class DeleteDhcpOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDhcpOptionsInput,
      OutputTypesUnion,
      DeleteDhcpOptionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDhcpOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDhcpOptionsInput,
    DeleteDhcpOptionsOutput,
    Blob
  >();

  constructor(readonly input: DeleteDhcpOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDhcpOptionsInput, DeleteDhcpOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDhcpOptionsInput, DeleteDhcpOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
