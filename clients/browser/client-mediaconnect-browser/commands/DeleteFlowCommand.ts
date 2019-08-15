import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFlow } from "../model/operations/DeleteFlow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFlowInput } from "../types/DeleteFlowInput";
import { DeleteFlowOutput } from "../types/DeleteFlowOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/DeleteFlowInput";
export * from "../types/DeleteFlowOutput";
export * from "../types/DeleteFlowExceptionsUnion";

export class DeleteFlowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFlowInput,
      OutputTypesUnion,
      DeleteFlowOutput,
      MediaConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFlowInput,
    DeleteFlowOutput,
    Blob
  >();

  constructor(readonly input: DeleteFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFlowInput, DeleteFlowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFlowInput, DeleteFlowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
