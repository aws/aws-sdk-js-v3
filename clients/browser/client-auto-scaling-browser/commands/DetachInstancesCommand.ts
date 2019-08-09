import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachInstances } from "../model/DetachInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachInstancesInput } from "../types/DetachInstancesInput";
import { DetachInstancesOutput } from "../types/DetachInstancesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DetachInstancesInput";
export * from "../types/DetachInstancesOutput";
export * from "../types/DetachInstancesExceptionsUnion";

export class DetachInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachInstancesInput,
      OutputTypesUnion,
      DetachInstancesOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DetachInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachInstancesInput,
    DetachInstancesOutput,
    Blob
  >();

  constructor(readonly input: DetachInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachInstancesInput, DetachInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachInstancesInput, DetachInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
