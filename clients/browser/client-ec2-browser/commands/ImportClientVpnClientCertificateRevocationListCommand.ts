import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportClientVpnClientCertificateRevocationList } from "../model/operations/ImportClientVpnClientCertificateRevocationList";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportClientVpnClientCertificateRevocationListInput } from "../types/ImportClientVpnClientCertificateRevocationListInput";
import { ImportClientVpnClientCertificateRevocationListOutput } from "../types/ImportClientVpnClientCertificateRevocationListOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ImportClientVpnClientCertificateRevocationListInput";
export * from "../types/ImportClientVpnClientCertificateRevocationListOutput";
export * from "../types/ImportClientVpnClientCertificateRevocationListExceptionsUnion";

export class ImportClientVpnClientCertificateRevocationListCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportClientVpnClientCertificateRevocationListInput,
      OutputTypesUnion,
      ImportClientVpnClientCertificateRevocationListOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ImportClientVpnClientCertificateRevocationList;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportClientVpnClientCertificateRevocationListInput,
    ImportClientVpnClientCertificateRevocationListOutput,
    Blob
  >();

  constructor(
    readonly input: ImportClientVpnClientCertificateRevocationListInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportClientVpnClientCertificateRevocationListInput,
    ImportClientVpnClientCertificateRevocationListOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ImportClientVpnClientCertificateRevocationListInput,
        ImportClientVpnClientCertificateRevocationListOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
