import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteListener } from "../model/operations/DeleteListener";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteListenerInput } from "../types/DeleteListenerInput";
import { DeleteListenerOutput } from "../types/DeleteListenerOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DeleteListenerInput";
export * from "../types/DeleteListenerOutput";
export * from "../types/DeleteListenerExceptionsUnion";

export class DeleteListenerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteListenerInput,
      OutputTypesUnion,
      DeleteListenerOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteListener;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteListenerInput,
    DeleteListenerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteListenerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteListenerInput, DeleteListenerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteListenerInput, DeleteListenerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
