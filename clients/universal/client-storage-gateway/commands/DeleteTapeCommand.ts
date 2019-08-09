import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTape } from "../model/DeleteTape";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTapeInput } from "../types/DeleteTapeInput";
import { DeleteTapeOutput } from "../types/DeleteTapeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteTapeInput";
export * from "../types/DeleteTapeOutput";
export * from "../types/DeleteTapeExceptionsUnion";

export class DeleteTapeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTapeInput,
      OutputTypesUnion,
      DeleteTapeOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteTape;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTapeInput,
    DeleteTapeOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteTapeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTapeInput, DeleteTapeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTapeInput, DeleteTapeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
