import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListVirtualRouters } from "../model/ListVirtualRouters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVirtualRoutersInput } from "../types/ListVirtualRoutersInput";
import { ListVirtualRoutersOutput } from "../types/ListVirtualRoutersOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/ListVirtualRoutersInput";
export * from "../types/ListVirtualRoutersOutput";
export * from "../types/ListVirtualRoutersExceptionsUnion";

export class ListVirtualRoutersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVirtualRoutersInput,
      OutputTypesUnion,
      ListVirtualRoutersOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListVirtualRouters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVirtualRoutersInput,
    ListVirtualRoutersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListVirtualRoutersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVirtualRoutersInput,
    ListVirtualRoutersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVirtualRoutersInput, ListVirtualRoutersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
