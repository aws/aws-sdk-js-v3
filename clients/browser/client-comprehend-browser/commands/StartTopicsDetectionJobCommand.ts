import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartTopicsDetectionJob } from "../model/StartTopicsDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartTopicsDetectionJobInput } from "../types/StartTopicsDetectionJobInput";
import { StartTopicsDetectionJobOutput } from "../types/StartTopicsDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StartTopicsDetectionJobInput";
export * from "../types/StartTopicsDetectionJobOutput";
export * from "../types/StartTopicsDetectionJobExceptionsUnion";

export class StartTopicsDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartTopicsDetectionJobInput,
      OutputTypesUnion,
      StartTopicsDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = StartTopicsDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartTopicsDetectionJobInput,
    StartTopicsDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: StartTopicsDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartTopicsDetectionJobInput,
    StartTopicsDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartTopicsDetectionJobInput, StartTopicsDetectionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
