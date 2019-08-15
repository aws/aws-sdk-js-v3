import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServers } from "../model/operations/ListServers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServersInput } from "../types/ListServersInput";
import { ListServersOutput } from "../types/ListServersOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/ListServersInput";
export * from "../types/ListServersOutput";
export * from "../types/ListServersExceptionsUnion";

export class ListServersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServersInput,
      OutputTypesUnion,
      ListServersOutput,
      TransferResolvedConfiguration,
      Blob
    > {
  readonly model = ListServers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServersInput,
    ListServersOutput,
    Blob
  >();

  constructor(readonly input: ListServersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<ListServersInput, ListServersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListServersInput, ListServersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
