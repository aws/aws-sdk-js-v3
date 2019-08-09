import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutAppReplicationConfiguration } from "../model/PutAppReplicationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAppReplicationConfigurationInput } from "../types/PutAppReplicationConfigurationInput";
import { PutAppReplicationConfigurationOutput } from "../types/PutAppReplicationConfigurationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/PutAppReplicationConfigurationInput";
export * from "../types/PutAppReplicationConfigurationOutput";
export * from "../types/PutAppReplicationConfigurationExceptionsUnion";

export class PutAppReplicationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAppReplicationConfigurationInput,
      OutputTypesUnion,
      PutAppReplicationConfigurationOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutAppReplicationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAppReplicationConfigurationInput,
    PutAppReplicationConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutAppReplicationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAppReplicationConfigurationInput,
    PutAppReplicationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutAppReplicationConfigurationInput,
        PutAppReplicationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
