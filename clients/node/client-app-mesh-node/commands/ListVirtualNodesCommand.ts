import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListVirtualNodes } from "../model/ListVirtualNodes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVirtualNodesInput } from "../types/ListVirtualNodesInput";
import { ListVirtualNodesOutput } from "../types/ListVirtualNodesOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/ListVirtualNodesInput";
export * from "../types/ListVirtualNodesOutput";
export * from "../types/ListVirtualNodesExceptionsUnion";

export class ListVirtualNodesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVirtualNodesInput,
      OutputTypesUnion,
      ListVirtualNodesOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListVirtualNodes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVirtualNodesInput,
    ListVirtualNodesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListVirtualNodesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<ListVirtualNodesInput, ListVirtualNodesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVirtualNodesInput, ListVirtualNodesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
