import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopMonitoringMembers } from "../model/StopMonitoringMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopMonitoringMembersInput } from "../types/StopMonitoringMembersInput";
import { StopMonitoringMembersOutput } from "../types/StopMonitoringMembersOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/StopMonitoringMembersInput";
export * from "../types/StopMonitoringMembersOutput";
export * from "../types/StopMonitoringMembersExceptionsUnion";

export class StopMonitoringMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopMonitoringMembersInput,
      OutputTypesUnion,
      StopMonitoringMembersOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopMonitoringMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopMonitoringMembersInput,
    StopMonitoringMembersOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopMonitoringMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopMonitoringMembersInput,
    StopMonitoringMembersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopMonitoringMembersInput, StopMonitoringMembersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
