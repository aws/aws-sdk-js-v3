import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGroupCertificateConfiguration } from "../model/GetGroupCertificateConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupCertificateConfigurationInput } from "../types/GetGroupCertificateConfigurationInput";
import { GetGroupCertificateConfigurationOutput } from "../types/GetGroupCertificateConfigurationOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetGroupCertificateConfigurationInput";
export * from "../types/GetGroupCertificateConfigurationOutput";
export * from "../types/GetGroupCertificateConfigurationExceptionsUnion";

export class GetGroupCertificateConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupCertificateConfigurationInput,
      OutputTypesUnion,
      GetGroupCertificateConfigurationOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetGroupCertificateConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupCertificateConfigurationInput,
    GetGroupCertificateConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: GetGroupCertificateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetGroupCertificateConfigurationInput,
    GetGroupCertificateConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetGroupCertificateConfigurationInput,
        GetGroupCertificateConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
