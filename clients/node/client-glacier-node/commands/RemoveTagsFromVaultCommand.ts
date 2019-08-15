import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveTagsFromVault } from "../model/operations/RemoveTagsFromVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTagsFromVaultInput } from "../types/RemoveTagsFromVaultInput";
import { RemoveTagsFromVaultOutput } from "../types/RemoveTagsFromVaultOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/RemoveTagsFromVaultInput";
export * from "../types/RemoveTagsFromVaultOutput";
export * from "../types/RemoveTagsFromVaultExceptionsUnion";

export class RemoveTagsFromVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTagsFromVaultInput,
      OutputTypesUnion,
      RemoveTagsFromVaultOutput,
      GlacierResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveTagsFromVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTagsFromVaultInput,
    RemoveTagsFromVaultOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveTagsFromVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveTagsFromVaultInput,
    RemoveTagsFromVaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveTagsFromVaultInput, RemoveTagsFromVaultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
