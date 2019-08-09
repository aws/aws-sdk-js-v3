import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCertificateAuthority } from "../model/CreateCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCertificateAuthorityInput } from "../types/CreateCertificateAuthorityInput";
import { CreateCertificateAuthorityOutput } from "../types/CreateCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/CreateCertificateAuthorityInput";
export * from "../types/CreateCertificateAuthorityOutput";
export * from "../types/CreateCertificateAuthorityExceptionsUnion";

export class CreateCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCertificateAuthorityInput,
      OutputTypesUnion,
      CreateCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCertificateAuthorityInput,
    CreateCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCertificateAuthorityInput,
    CreateCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCertificateAuthorityInput,
        CreateCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
