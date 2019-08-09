import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListApiKeys } from "../model/ListApiKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApiKeysInput } from "../types/ListApiKeysInput";
import { ListApiKeysOutput } from "../types/ListApiKeysOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListApiKeysInput";
export * from "../types/ListApiKeysOutput";
export * from "../types/ListApiKeysExceptionsUnion";

export class ListApiKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApiKeysInput,
      OutputTypesUnion,
      ListApiKeysOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListApiKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApiKeysInput,
    ListApiKeysOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListApiKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListApiKeysInput, ListApiKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListApiKeysInput, ListApiKeysOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
