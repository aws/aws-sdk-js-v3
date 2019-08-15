import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateResolver } from "../model/operations/CreateResolver";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResolverInput } from "../types/CreateResolverInput";
import { CreateResolverOutput } from "../types/CreateResolverOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/CreateResolverInput";
export * from "../types/CreateResolverOutput";
export * from "../types/CreateResolverExceptionsUnion";

export class CreateResolverCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResolverInput,
      OutputTypesUnion,
      CreateResolverOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = CreateResolver;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResolverInput,
    CreateResolverOutput,
    Blob
  >();

  constructor(readonly input: CreateResolverInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateResolverInput, CreateResolverOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResolverInput, CreateResolverOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
