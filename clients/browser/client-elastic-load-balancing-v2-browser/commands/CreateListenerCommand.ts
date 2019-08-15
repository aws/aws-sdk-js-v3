import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateListener } from "../model/operations/CreateListener";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateListenerInput } from "../types/CreateListenerInput";
import { CreateListenerOutput } from "../types/CreateListenerOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/CreateListenerInput";
export * from "../types/CreateListenerOutput";
export * from "../types/CreateListenerExceptionsUnion";

export class CreateListenerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateListenerInput,
      OutputTypesUnion,
      CreateListenerOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateListener;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateListenerInput,
    CreateListenerOutput,
    Blob
  >();

  constructor(readonly input: CreateListenerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateListenerInput, CreateListenerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateListenerInput, CreateListenerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
