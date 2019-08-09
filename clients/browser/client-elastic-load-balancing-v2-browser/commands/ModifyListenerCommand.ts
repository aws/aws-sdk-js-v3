import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyListener } from "../model/ModifyListener";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyListenerInput } from "../types/ModifyListenerInput";
import { ModifyListenerOutput } from "../types/ModifyListenerOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/ModifyListenerInput";
export * from "../types/ModifyListenerOutput";
export * from "../types/ModifyListenerExceptionsUnion";

export class ModifyListenerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyListenerInput,
      OutputTypesUnion,
      ModifyListenerOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyListener;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyListenerInput,
    ModifyListenerOutput,
    Blob
  >();

  constructor(readonly input: ModifyListenerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyListenerInput, ModifyListenerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyListenerInput, ModifyListenerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
