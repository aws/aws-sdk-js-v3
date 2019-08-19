import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RecordLifecycleActionHeartbeat } from "../model/operations/RecordLifecycleActionHeartbeat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RecordLifecycleActionHeartbeatInput } from "../types/RecordLifecycleActionHeartbeatInput";
import { RecordLifecycleActionHeartbeatOutput } from "../types/RecordLifecycleActionHeartbeatOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/RecordLifecycleActionHeartbeatInput";
export * from "../types/RecordLifecycleActionHeartbeatOutput";
export * from "../types/RecordLifecycleActionHeartbeatExceptionsUnion";

export class RecordLifecycleActionHeartbeatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RecordLifecycleActionHeartbeatInput,
      OutputTypesUnion,
      RecordLifecycleActionHeartbeatOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RecordLifecycleActionHeartbeat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RecordLifecycleActionHeartbeatInput,
    RecordLifecycleActionHeartbeatOutput,
    _stream.Readable
  >();

  constructor(readonly input: RecordLifecycleActionHeartbeatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RecordLifecycleActionHeartbeatInput,
    RecordLifecycleActionHeartbeatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RecordLifecycleActionHeartbeatInput,
        RecordLifecycleActionHeartbeatOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
