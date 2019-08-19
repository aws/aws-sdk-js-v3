import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOutgoingCertificates } from "../model/operations/ListOutgoingCertificates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOutgoingCertificatesInput } from "../types/ListOutgoingCertificatesInput";
import { ListOutgoingCertificatesOutput } from "../types/ListOutgoingCertificatesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListOutgoingCertificatesInput";
export * from "../types/ListOutgoingCertificatesOutput";
export * from "../types/ListOutgoingCertificatesExceptionsUnion";

export class ListOutgoingCertificatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOutgoingCertificatesInput,
      OutputTypesUnion,
      ListOutgoingCertificatesOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListOutgoingCertificates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOutgoingCertificatesInput,
    ListOutgoingCertificatesOutput,
    Blob
  >();

  constructor(readonly input: ListOutgoingCertificatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOutgoingCertificatesInput,
    ListOutgoingCertificatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOutgoingCertificatesInput, ListOutgoingCertificatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
