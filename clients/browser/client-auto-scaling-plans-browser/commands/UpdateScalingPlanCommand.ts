import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateScalingPlan } from "../model/operations/UpdateScalingPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateScalingPlanInput } from "../types/UpdateScalingPlanInput";
import { UpdateScalingPlanOutput } from "../types/UpdateScalingPlanOutput";
import { AutoScalingPlansResolvedConfiguration } from "../AutoScalingPlansConfiguration";
export * from "../types/UpdateScalingPlanInput";
export * from "../types/UpdateScalingPlanOutput";
export * from "../types/UpdateScalingPlanExceptionsUnion";

export class UpdateScalingPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateScalingPlanInput,
      OutputTypesUnion,
      UpdateScalingPlanOutput,
      AutoScalingPlansResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateScalingPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateScalingPlanInput,
    UpdateScalingPlanOutput,
    Blob
  >();

  constructor(readonly input: UpdateScalingPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingPlansResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateScalingPlanInput, UpdateScalingPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateScalingPlanInput, UpdateScalingPlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
