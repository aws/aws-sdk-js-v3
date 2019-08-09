import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIndex } from "../model/ListIndex";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIndexInput } from "../types/ListIndexInput";
import { ListIndexOutput } from "../types/ListIndexOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListIndexInput";
export * from "../types/ListIndexOutput";
export * from "../types/ListIndexExceptionsUnion";

export class ListIndexCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIndexInput,
      OutputTypesUnion,
      ListIndexOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListIndex;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIndexInput,
    ListIndexOutput,
    Uint8Array
  >();

  constructor(readonly input: ListIndexInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<ListIndexInput, ListIndexOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIndexInput, ListIndexOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
