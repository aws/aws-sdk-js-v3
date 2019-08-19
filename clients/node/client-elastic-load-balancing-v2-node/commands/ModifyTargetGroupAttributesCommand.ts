import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyTargetGroupAttributes } from "../model/operations/ModifyTargetGroupAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyTargetGroupAttributesInput } from "../types/ModifyTargetGroupAttributesInput";
import { ModifyTargetGroupAttributesOutput } from "../types/ModifyTargetGroupAttributesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/ModifyTargetGroupAttributesInput";
export * from "../types/ModifyTargetGroupAttributesOutput";
export * from "../types/ModifyTargetGroupAttributesExceptionsUnion";

export class ModifyTargetGroupAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyTargetGroupAttributesInput,
      OutputTypesUnion,
      ModifyTargetGroupAttributesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyTargetGroupAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyTargetGroupAttributesInput,
    ModifyTargetGroupAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyTargetGroupAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyTargetGroupAttributesInput,
    ModifyTargetGroupAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyTargetGroupAttributesInput,
        ModifyTargetGroupAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
