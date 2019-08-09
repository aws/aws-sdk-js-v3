import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateIdentityProviderConfiguration } from "../model/UpdateIdentityProviderConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIdentityProviderConfigurationInput } from "../types/UpdateIdentityProviderConfigurationInput";
import { UpdateIdentityProviderConfigurationOutput } from "../types/UpdateIdentityProviderConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/UpdateIdentityProviderConfigurationInput";
export * from "../types/UpdateIdentityProviderConfigurationOutput";
export * from "../types/UpdateIdentityProviderConfigurationExceptionsUnion";

export class UpdateIdentityProviderConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIdentityProviderConfigurationInput,
      OutputTypesUnion,
      UpdateIdentityProviderConfigurationOutput,
      WorkLinkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateIdentityProviderConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIdentityProviderConfigurationInput,
    UpdateIdentityProviderConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateIdentityProviderConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateIdentityProviderConfigurationInput,
    UpdateIdentityProviderConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateIdentityProviderConfigurationInput,
        UpdateIdentityProviderConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
