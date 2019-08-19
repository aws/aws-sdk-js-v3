import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRemediationConfiguration } from "../model/operations/DeleteRemediationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRemediationConfigurationInput } from "../types/DeleteRemediationConfigurationInput";
import { DeleteRemediationConfigurationOutput } from "../types/DeleteRemediationConfigurationOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteRemediationConfigurationInput";
export * from "../types/DeleteRemediationConfigurationOutput";
export * from "../types/DeleteRemediationConfigurationExceptionsUnion";

export class DeleteRemediationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRemediationConfigurationInput,
      OutputTypesUnion,
      DeleteRemediationConfigurationOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRemediationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRemediationConfigurationInput,
    DeleteRemediationConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DeleteRemediationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRemediationConfigurationInput,
    DeleteRemediationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteRemediationConfigurationInput,
        DeleteRemediationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
