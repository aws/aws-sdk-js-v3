import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCACertificates } from "../model/ListCACertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCACertificatesInput } from "../types/ListCACertificatesInput";
import { ListCACertificatesOutput } from "../types/ListCACertificatesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListCACertificatesInput";
export * from "../types/ListCACertificatesOutput";
export * from "../types/ListCACertificatesExceptionsUnion";

export class ListCACertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCACertificatesInput,
      OutputTypesUnion,
      ListCACertificatesOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListCACertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCACertificatesInput,
    ListCACertificatesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListCACertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCACertificatesInput,
    ListCACertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCACertificatesInput, ListCACertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
