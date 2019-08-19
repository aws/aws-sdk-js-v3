import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateApiKey } from "../model/operations/UpdateApiKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApiKeyInput } from "../types/UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "../types/UpdateApiKeyOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/UpdateApiKeyInput";
export * from "../types/UpdateApiKeyOutput";
export * from "../types/UpdateApiKeyExceptionsUnion";

export class UpdateApiKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApiKeyInput,
      OutputTypesUnion,
      UpdateApiKeyOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateApiKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApiKeyInput,
    UpdateApiKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateApiKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApiKeyInput, UpdateApiKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApiKeyInput, UpdateApiKeyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
