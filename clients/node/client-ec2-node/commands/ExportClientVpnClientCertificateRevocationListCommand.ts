import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExportClientVpnClientCertificateRevocationList } from "../model/ExportClientVpnClientCertificateRevocationList";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportClientVpnClientCertificateRevocationListInput } from "../types/ExportClientVpnClientCertificateRevocationListInput";
import { ExportClientVpnClientCertificateRevocationListOutput } from "../types/ExportClientVpnClientCertificateRevocationListOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ExportClientVpnClientCertificateRevocationListInput";
export * from "../types/ExportClientVpnClientCertificateRevocationListOutput";
export * from "../types/ExportClientVpnClientCertificateRevocationListExceptionsUnion";

export class ExportClientVpnClientCertificateRevocationListCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportClientVpnClientCertificateRevocationListInput,
      OutputTypesUnion,
      ExportClientVpnClientCertificateRevocationListOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExportClientVpnClientCertificateRevocationList;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportClientVpnClientCertificateRevocationListInput,
    ExportClientVpnClientCertificateRevocationListOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: ExportClientVpnClientCertificateRevocationListInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportClientVpnClientCertificateRevocationListInput,
    ExportClientVpnClientCertificateRevocationListOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExportClientVpnClientCertificateRevocationListInput,
        ExportClientVpnClientCertificateRevocationListOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
