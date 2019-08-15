import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTargetGroup } from "../model/operations/CreateTargetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTargetGroupInput } from "../types/CreateTargetGroupInput";
import { CreateTargetGroupOutput } from "../types/CreateTargetGroupOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/CreateTargetGroupInput";
export * from "../types/CreateTargetGroupOutput";
export * from "../types/CreateTargetGroupExceptionsUnion";

export class CreateTargetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTargetGroupInput,
      OutputTypesUnion,
      CreateTargetGroupOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTargetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTargetGroupInput,
    CreateTargetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTargetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTargetGroupInput, CreateTargetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTargetGroupInput, CreateTargetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
