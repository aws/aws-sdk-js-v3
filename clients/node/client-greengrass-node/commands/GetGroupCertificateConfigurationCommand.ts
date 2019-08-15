import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetGroupCertificateConfiguration } from "../model/operations/GetGroupCertificateConfiguration";
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
      _stream.Readable
    > {
  readonly model = GetGroupCertificateConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupCertificateConfigurationInput,
    GetGroupCertificateConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetGroupCertificateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
