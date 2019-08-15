import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVault } from "../model/operations/DeleteVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVaultInput } from "../types/DeleteVaultInput";
import { DeleteVaultOutput } from "../types/DeleteVaultOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/DeleteVaultInput";
export * from "../types/DeleteVaultOutput";
export * from "../types/DeleteVaultExceptionsUnion";

export class DeleteVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVaultInput,
      OutputTypesUnion,
      DeleteVaultOutput,
      GlacierResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVaultInput,
    DeleteVaultOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVaultInput, DeleteVaultOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVaultInput, DeleteVaultOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
