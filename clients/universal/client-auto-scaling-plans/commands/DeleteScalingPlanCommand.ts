import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteScalingPlan } from "../model/DeleteScalingPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScalingPlanInput } from "../types/DeleteScalingPlanInput";
import { DeleteScalingPlanOutput } from "../types/DeleteScalingPlanOutput";
import { AutoScalingPlansResolvedConfiguration } from "../AutoScalingPlansConfiguration";
export * from "../types/DeleteScalingPlanInput";
export * from "../types/DeleteScalingPlanOutput";
export * from "../types/DeleteScalingPlanExceptionsUnion";

export class DeleteScalingPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScalingPlanInput,
      OutputTypesUnion,
      DeleteScalingPlanOutput,
      AutoScalingPlansResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteScalingPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScalingPlanInput,
    DeleteScalingPlanOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteScalingPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingPlansResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteScalingPlanInput, DeleteScalingPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScalingPlanInput, DeleteScalingPlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
