import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartMonitoringMembers } from "../model/operations/StartMonitoringMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartMonitoringMembersInput } from "../types/StartMonitoringMembersInput";
import { StartMonitoringMembersOutput } from "../types/StartMonitoringMembersOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/StartMonitoringMembersInput";
export * from "../types/StartMonitoringMembersOutput";
export * from "../types/StartMonitoringMembersExceptionsUnion";

export class StartMonitoringMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartMonitoringMembersInput,
      OutputTypesUnion,
      StartMonitoringMembersOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartMonitoringMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartMonitoringMembersInput,
    StartMonitoringMembersOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartMonitoringMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartMonitoringMembersInput,
    StartMonitoringMembersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartMonitoringMembersInput, StartMonitoringMembersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
