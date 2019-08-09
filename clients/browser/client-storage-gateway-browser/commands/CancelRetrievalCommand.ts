import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelRetrieval } from "../model/CancelRetrieval";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelRetrievalInput } from "../types/CancelRetrievalInput";
import { CancelRetrievalOutput } from "../types/CancelRetrievalOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CancelRetrievalInput";
export * from "../types/CancelRetrievalOutput";
export * from "../types/CancelRetrievalExceptionsUnion";

export class CancelRetrievalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelRetrievalInput,
      OutputTypesUnion,
      CancelRetrievalOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CancelRetrieval;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelRetrievalInput,
    CancelRetrievalOutput,
    Blob
  >();

  constructor(readonly input: CancelRetrievalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelRetrievalInput, CancelRetrievalOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelRetrievalInput, CancelRetrievalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
