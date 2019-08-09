import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopEntitiesDetectionJob } from "../model/StopEntitiesDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopEntitiesDetectionJobInput } from "../types/StopEntitiesDetectionJobInput";
import { StopEntitiesDetectionJobOutput } from "../types/StopEntitiesDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StopEntitiesDetectionJobInput";
export * from "../types/StopEntitiesDetectionJobOutput";
export * from "../types/StopEntitiesDetectionJobExceptionsUnion";

export class StopEntitiesDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopEntitiesDetectionJobInput,
      OutputTypesUnion,
      StopEntitiesDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = StopEntitiesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopEntitiesDetectionJobInput,
    StopEntitiesDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: StopEntitiesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopEntitiesDetectionJobInput,
    StopEntitiesDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopEntitiesDetectionJobInput, StopEntitiesDetectionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
