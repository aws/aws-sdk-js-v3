import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateResolver } from "../model/operations/UpdateResolver";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateResolverInput } from "../types/UpdateResolverInput";
import { UpdateResolverOutput } from "../types/UpdateResolverOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/UpdateResolverInput";
export * from "../types/UpdateResolverOutput";
export * from "../types/UpdateResolverExceptionsUnion";

export class UpdateResolverCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateResolverInput,
      OutputTypesUnion,
      UpdateResolverOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateResolver;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateResolverInput,
    UpdateResolverOutput,
    Blob
  >();

  constructor(readonly input: UpdateResolverInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateResolverInput, UpdateResolverOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateResolverInput, UpdateResolverOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
