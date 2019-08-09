import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCertificates } from "../model/ListCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCertificatesInput } from "../types/ListCertificatesInput";
import { ListCertificatesOutput } from "../types/ListCertificatesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListCertificatesInput";
export * from "../types/ListCertificatesOutput";
export * from "../types/ListCertificatesExceptionsUnion";

export class ListCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCertificatesInput,
      OutputTypesUnion,
      ListCertificatesOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCertificatesInput,
    ListCertificatesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListCertificatesInput, ListCertificatesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCertificatesInput, ListCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
