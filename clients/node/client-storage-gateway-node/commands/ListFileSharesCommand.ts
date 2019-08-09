import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFileShares } from "../model/ListFileShares";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFileSharesInput } from "../types/ListFileSharesInput";
import { ListFileSharesOutput } from "../types/ListFileSharesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListFileSharesInput";
export * from "../types/ListFileSharesOutput";
export * from "../types/ListFileSharesExceptionsUnion";

export class ListFileSharesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFileSharesInput,
      OutputTypesUnion,
      ListFileSharesOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFileShares;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFileSharesInput,
    ListFileSharesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFileSharesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFileSharesInput, ListFileSharesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFileSharesInput, ListFileSharesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
