import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAutoScalingGroup } from "../model/UpdateAutoScalingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAutoScalingGroupInput } from "../types/UpdateAutoScalingGroupInput";
import { UpdateAutoScalingGroupOutput } from "../types/UpdateAutoScalingGroupOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/UpdateAutoScalingGroupInput";
export * from "../types/UpdateAutoScalingGroupOutput";
export * from "../types/UpdateAutoScalingGroupExceptionsUnion";

export class UpdateAutoScalingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAutoScalingGroupInput,
      OutputTypesUnion,
      UpdateAutoScalingGroupOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAutoScalingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAutoScalingGroupInput,
    UpdateAutoScalingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAutoScalingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAutoScalingGroupInput,
    UpdateAutoScalingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAutoScalingGroupInput, UpdateAutoScalingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
