import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartReplicationTaskAssessment } from "../model/StartReplicationTaskAssessment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartReplicationTaskAssessmentInput } from "../types/StartReplicationTaskAssessmentInput";
import { StartReplicationTaskAssessmentOutput } from "../types/StartReplicationTaskAssessmentOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/StartReplicationTaskAssessmentInput";
export * from "../types/StartReplicationTaskAssessmentOutput";
export * from "../types/StartReplicationTaskAssessmentExceptionsUnion";

export class StartReplicationTaskAssessmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartReplicationTaskAssessmentInput,
      OutputTypesUnion,
      StartReplicationTaskAssessmentOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartReplicationTaskAssessment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartReplicationTaskAssessmentInput,
    StartReplicationTaskAssessmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartReplicationTaskAssessmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartReplicationTaskAssessmentInput,
    StartReplicationTaskAssessmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartReplicationTaskAssessmentInput,
        StartReplicationTaskAssessmentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
