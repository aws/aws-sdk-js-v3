import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyTargetGroup } from "../model/operations/ModifyTargetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyTargetGroupInput } from "../types/ModifyTargetGroupInput";
import { ModifyTargetGroupOutput } from "../types/ModifyTargetGroupOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/ModifyTargetGroupInput";
export * from "../types/ModifyTargetGroupOutput";
export * from "../types/ModifyTargetGroupExceptionsUnion";

export class ModifyTargetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyTargetGroupInput,
      OutputTypesUnion,
      ModifyTargetGroupOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyTargetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyTargetGroupInput,
    ModifyTargetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyTargetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyTargetGroupInput, ModifyTargetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyTargetGroupInput, ModifyTargetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
