import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSecurityConfiguration } from "../model/DeleteSecurityConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSecurityConfigurationInput } from "../types/DeleteSecurityConfigurationInput";
import { DeleteSecurityConfigurationOutput } from "../types/DeleteSecurityConfigurationOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/DeleteSecurityConfigurationInput";
export * from "../types/DeleteSecurityConfigurationOutput";
export * from "../types/DeleteSecurityConfigurationExceptionsUnion";

export class DeleteSecurityConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSecurityConfigurationInput,
      OutputTypesUnion,
      DeleteSecurityConfigurationOutput,
      EMRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSecurityConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSecurityConfigurationInput,
    DeleteSecurityConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSecurityConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSecurityConfigurationInput,
    DeleteSecurityConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteSecurityConfigurationInput,
        DeleteSecurityConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
