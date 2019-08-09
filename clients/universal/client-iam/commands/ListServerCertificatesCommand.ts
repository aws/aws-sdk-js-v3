import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServerCertificates } from "../model/ListServerCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServerCertificatesInput } from "../types/ListServerCertificatesInput";
import { ListServerCertificatesOutput } from "../types/ListServerCertificatesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListServerCertificatesInput";
export * from "../types/ListServerCertificatesOutput";
export * from "../types/ListServerCertificatesExceptionsUnion";

export class ListServerCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServerCertificatesInput,
      OutputTypesUnion,
      ListServerCertificatesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListServerCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServerCertificatesInput,
    ListServerCertificatesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListServerCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListServerCertificatesInput,
    ListServerCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListServerCertificatesInput, ListServerCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
