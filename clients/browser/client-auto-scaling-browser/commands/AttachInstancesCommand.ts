import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachInstances } from "../model/AttachInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachInstancesInput } from "../types/AttachInstancesInput";
import { AttachInstancesOutput } from "../types/AttachInstancesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/AttachInstancesInput";
export * from "../types/AttachInstancesOutput";
export * from "../types/AttachInstancesExceptionsUnion";

export class AttachInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachInstancesInput,
      OutputTypesUnion,
      AttachInstancesOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = AttachInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachInstancesInput,
    AttachInstancesOutput,
    Blob
  >();

  constructor(readonly input: AttachInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachInstancesInput, AttachInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachInstancesInput, AttachInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
