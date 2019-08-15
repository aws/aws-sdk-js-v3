import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteGraphqlApi } from "../model/operations/DeleteGraphqlApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGraphqlApiInput } from "../types/DeleteGraphqlApiInput";
import { DeleteGraphqlApiOutput } from "../types/DeleteGraphqlApiOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/DeleteGraphqlApiInput";
export * from "../types/DeleteGraphqlApiOutput";
export * from "../types/DeleteGraphqlApiExceptionsUnion";

export class DeleteGraphqlApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGraphqlApiInput,
      OutputTypesUnion,
      DeleteGraphqlApiOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteGraphqlApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGraphqlApiInput,
    DeleteGraphqlApiOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteGraphqlApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGraphqlApiInput, DeleteGraphqlApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGraphqlApiInput, DeleteGraphqlApiOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
