import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetGroupCertificateAuthority } from "../model/operations/GetGroupCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupCertificateAuthorityInput } from "../types/GetGroupCertificateAuthorityInput";
import { GetGroupCertificateAuthorityOutput } from "../types/GetGroupCertificateAuthorityOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetGroupCertificateAuthorityInput";
export * from "../types/GetGroupCertificateAuthorityOutput";
export * from "../types/GetGroupCertificateAuthorityExceptionsUnion";

export class GetGroupCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupCertificateAuthorityInput,
      OutputTypesUnion,
      GetGroupCertificateAuthorityOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetGroupCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupCertificateAuthorityInput,
    GetGroupCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetGroupCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetGroupCertificateAuthorityInput,
    GetGroupCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetGroupCertificateAuthorityInput,
        GetGroupCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
