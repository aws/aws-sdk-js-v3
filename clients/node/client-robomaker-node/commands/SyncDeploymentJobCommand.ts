import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SyncDeploymentJob } from "../model/operations/SyncDeploymentJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SyncDeploymentJobInput } from "../types/SyncDeploymentJobInput";
import { SyncDeploymentJobOutput } from "../types/SyncDeploymentJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/SyncDeploymentJobInput";
export * from "../types/SyncDeploymentJobOutput";
export * from "../types/SyncDeploymentJobExceptionsUnion";

export class SyncDeploymentJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SyncDeploymentJobInput,
      OutputTypesUnion,
      SyncDeploymentJobOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SyncDeploymentJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SyncDeploymentJobInput,
    SyncDeploymentJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: SyncDeploymentJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<SyncDeploymentJobInput, SyncDeploymentJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SyncDeploymentJobInput, SyncDeploymentJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
