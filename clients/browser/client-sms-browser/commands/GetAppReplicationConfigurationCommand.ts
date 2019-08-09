import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAppReplicationConfiguration } from "../model/GetAppReplicationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAppReplicationConfigurationInput } from "../types/GetAppReplicationConfigurationInput";
import { GetAppReplicationConfigurationOutput } from "../types/GetAppReplicationConfigurationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GetAppReplicationConfigurationInput";
export * from "../types/GetAppReplicationConfigurationOutput";
export * from "../types/GetAppReplicationConfigurationExceptionsUnion";

export class GetAppReplicationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAppReplicationConfigurationInput,
      OutputTypesUnion,
      GetAppReplicationConfigurationOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = GetAppReplicationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppReplicationConfigurationInput,
    GetAppReplicationConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetAppReplicationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAppReplicationConfigurationInput,
    GetAppReplicationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAppReplicationConfigurationInput,
        GetAppReplicationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
