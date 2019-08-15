import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAccessKeys } from "../model/operations/ListAccessKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAccessKeysInput } from "../types/ListAccessKeysInput";
import { ListAccessKeysOutput } from "../types/ListAccessKeysOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListAccessKeysInput";
export * from "../types/ListAccessKeysOutput";
export * from "../types/ListAccessKeysExceptionsUnion";

export class ListAccessKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAccessKeysInput,
      OutputTypesUnion,
      ListAccessKeysOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAccessKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAccessKeysInput,
    ListAccessKeysOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAccessKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAccessKeysInput, ListAccessKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAccessKeysInput, ListAccessKeysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
