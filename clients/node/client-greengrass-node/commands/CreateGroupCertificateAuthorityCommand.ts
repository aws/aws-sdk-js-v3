import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGroupCertificateAuthority } from "../model/CreateGroupCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGroupCertificateAuthorityInput } from "../types/CreateGroupCertificateAuthorityInput";
import { CreateGroupCertificateAuthorityOutput } from "../types/CreateGroupCertificateAuthorityOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateGroupCertificateAuthorityInput";
export * from "../types/CreateGroupCertificateAuthorityOutput";
export * from "../types/CreateGroupCertificateAuthorityExceptionsUnion";

export class CreateGroupCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGroupCertificateAuthorityInput,
      OutputTypesUnion,
      CreateGroupCertificateAuthorityOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateGroupCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGroupCertificateAuthorityInput,
    CreateGroupCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGroupCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGroupCertificateAuthorityInput,
    CreateGroupCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateGroupCertificateAuthorityInput,
        CreateGroupCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
