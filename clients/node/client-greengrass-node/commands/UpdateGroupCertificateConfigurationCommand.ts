import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGroupCertificateConfiguration } from "../model/UpdateGroupCertificateConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGroupCertificateConfigurationInput } from "../types/UpdateGroupCertificateConfigurationInput";
import { UpdateGroupCertificateConfigurationOutput } from "../types/UpdateGroupCertificateConfigurationOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateGroupCertificateConfigurationInput";
export * from "../types/UpdateGroupCertificateConfigurationOutput";
export * from "../types/UpdateGroupCertificateConfigurationExceptionsUnion";

export class UpdateGroupCertificateConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGroupCertificateConfigurationInput,
      OutputTypesUnion,
      UpdateGroupCertificateConfigurationOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGroupCertificateConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGroupCertificateConfigurationInput,
    UpdateGroupCertificateConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGroupCertificateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGroupCertificateConfigurationInput,
    UpdateGroupCertificateConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateGroupCertificateConfigurationInput,
        UpdateGroupCertificateConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
