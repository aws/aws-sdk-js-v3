import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLag } from "../model/DeleteLag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLagInput } from "../types/DeleteLagInput";
import { DeleteLagOutput } from "../types/DeleteLagOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteLagInput";
export * from "../types/DeleteLagOutput";
export * from "../types/DeleteLagExceptionsUnion";

export class DeleteLagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLagInput,
      OutputTypesUnion,
      DeleteLagOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteLag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLagInput,
    DeleteLagOutput,
    Blob
  >();

  constructor(readonly input: DeleteLagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLagInput, DeleteLagOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLagInput, DeleteLagOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
