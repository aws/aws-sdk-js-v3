import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartAppReplication } from "../model/StartAppReplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartAppReplicationInput } from "../types/StartAppReplicationInput";
import { StartAppReplicationOutput } from "../types/StartAppReplicationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/StartAppReplicationInput";
export * from "../types/StartAppReplicationOutput";
export * from "../types/StartAppReplicationExceptionsUnion";

export class StartAppReplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartAppReplicationInput,
      OutputTypesUnion,
      StartAppReplicationOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartAppReplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAppReplicationInput,
    StartAppReplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartAppReplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartAppReplicationInput,
    StartAppReplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartAppReplicationInput, StartAppReplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
