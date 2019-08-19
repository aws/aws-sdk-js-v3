import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartEntitiesDetectionJob } from "../model/operations/StartEntitiesDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartEntitiesDetectionJobInput } from "../types/StartEntitiesDetectionJobInput";
import { StartEntitiesDetectionJobOutput } from "../types/StartEntitiesDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StartEntitiesDetectionJobInput";
export * from "../types/StartEntitiesDetectionJobOutput";
export * from "../types/StartEntitiesDetectionJobExceptionsUnion";

export class StartEntitiesDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartEntitiesDetectionJobInput,
      OutputTypesUnion,
      StartEntitiesDetectionJobOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartEntitiesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartEntitiesDetectionJobInput,
    StartEntitiesDetectionJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartEntitiesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartEntitiesDetectionJobInput,
    StartEntitiesDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartEntitiesDetectionJobInput, StartEntitiesDetectionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
