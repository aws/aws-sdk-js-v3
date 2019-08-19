import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGraphqlApi } from "../model/operations/UpdateGraphqlApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGraphqlApiInput } from "../types/UpdateGraphqlApiInput";
import { UpdateGraphqlApiOutput } from "../types/UpdateGraphqlApiOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/UpdateGraphqlApiInput";
export * from "../types/UpdateGraphqlApiOutput";
export * from "../types/UpdateGraphqlApiExceptionsUnion";

export class UpdateGraphqlApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGraphqlApiInput,
      OutputTypesUnion,
      UpdateGraphqlApiOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGraphqlApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGraphqlApiInput,
    UpdateGraphqlApiOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGraphqlApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGraphqlApiInput, UpdateGraphqlApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGraphqlApiInput, UpdateGraphqlApiOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
