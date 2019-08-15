import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartOnDemandReplicationRun } from "../model/operations/StartOnDemandReplicationRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartOnDemandReplicationRunInput } from "../types/StartOnDemandReplicationRunInput";
import { StartOnDemandReplicationRunOutput } from "../types/StartOnDemandReplicationRunOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/StartOnDemandReplicationRunInput";
export * from "../types/StartOnDemandReplicationRunOutput";
export * from "../types/StartOnDemandReplicationRunExceptionsUnion";

export class StartOnDemandReplicationRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartOnDemandReplicationRunInput,
      OutputTypesUnion,
      StartOnDemandReplicationRunOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = StartOnDemandReplicationRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartOnDemandReplicationRunInput,
    StartOnDemandReplicationRunOutput,
    Blob
  >();

  constructor(readonly input: StartOnDemandReplicationRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartOnDemandReplicationRunInput,
    StartOnDemandReplicationRunOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartOnDemandReplicationRunInput,
        StartOnDemandReplicationRunOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
