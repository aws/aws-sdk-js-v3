import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAppReplicationConfiguration } from "../model/operations/DeleteAppReplicationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAppReplicationConfigurationInput } from "../types/DeleteAppReplicationConfigurationInput";
import { DeleteAppReplicationConfigurationOutput } from "../types/DeleteAppReplicationConfigurationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/DeleteAppReplicationConfigurationInput";
export * from "../types/DeleteAppReplicationConfigurationOutput";
export * from "../types/DeleteAppReplicationConfigurationExceptionsUnion";

export class DeleteAppReplicationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAppReplicationConfigurationInput,
      OutputTypesUnion,
      DeleteAppReplicationConfigurationOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAppReplicationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAppReplicationConfigurationInput,
    DeleteAppReplicationConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAppReplicationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAppReplicationConfigurationInput,
    DeleteAppReplicationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteAppReplicationConfigurationInput,
        DeleteAppReplicationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
