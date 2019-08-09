import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVault } from "../model/CreateVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVaultInput } from "../types/CreateVaultInput";
import { CreateVaultOutput } from "../types/CreateVaultOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/CreateVaultInput";
export * from "../types/CreateVaultOutput";
export * from "../types/CreateVaultExceptionsUnion";

export class CreateVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVaultInput,
      OutputTypesUnion,
      CreateVaultOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVaultInput,
    CreateVaultOutput,
    Blob
  >();

  constructor(readonly input: CreateVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVaultInput, CreateVaultOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVaultInput, CreateVaultOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
