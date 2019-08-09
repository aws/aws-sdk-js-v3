import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSigningCertificates } from "../model/ListSigningCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSigningCertificatesInput } from "../types/ListSigningCertificatesInput";
import { ListSigningCertificatesOutput } from "../types/ListSigningCertificatesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListSigningCertificatesInput";
export * from "../types/ListSigningCertificatesOutput";
export * from "../types/ListSigningCertificatesExceptionsUnion";

export class ListSigningCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSigningCertificatesInput,
      OutputTypesUnion,
      ListSigningCertificatesOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSigningCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSigningCertificatesInput,
    ListSigningCertificatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSigningCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSigningCertificatesInput,
    ListSigningCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSigningCertificatesInput, ListSigningCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
