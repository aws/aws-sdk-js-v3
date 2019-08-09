import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInvitationConfiguration } from "../model/GetInvitationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInvitationConfigurationInput } from "../types/GetInvitationConfigurationInput";
import { GetInvitationConfigurationOutput } from "../types/GetInvitationConfigurationOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetInvitationConfigurationInput";
export * from "../types/GetInvitationConfigurationOutput";
export * from "../types/GetInvitationConfigurationExceptionsUnion";

export class GetInvitationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInvitationConfigurationInput,
      OutputTypesUnion,
      GetInvitationConfigurationOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = GetInvitationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInvitationConfigurationInput,
    GetInvitationConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetInvitationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInvitationConfigurationInput,
    GetInvitationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetInvitationConfigurationInput,
        GetInvitationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
