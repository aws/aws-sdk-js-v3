import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAutoScalingGroup } from "../model/DeleteAutoScalingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAutoScalingGroupInput } from "../types/DeleteAutoScalingGroupInput";
import { DeleteAutoScalingGroupOutput } from "../types/DeleteAutoScalingGroupOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DeleteAutoScalingGroupInput";
export * from "../types/DeleteAutoScalingGroupOutput";
export * from "../types/DeleteAutoScalingGroupExceptionsUnion";

export class DeleteAutoScalingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAutoScalingGroupInput,
      OutputTypesUnion,
      DeleteAutoScalingGroupOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteAutoScalingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAutoScalingGroupInput,
    DeleteAutoScalingGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteAutoScalingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAutoScalingGroupInput,
    DeleteAutoScalingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAutoScalingGroupInput, DeleteAutoScalingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
