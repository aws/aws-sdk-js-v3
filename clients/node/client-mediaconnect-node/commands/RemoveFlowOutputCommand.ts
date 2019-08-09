import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveFlowOutput } from "../model/RemoveFlowOutput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveFlowOutputInput } from "../types/RemoveFlowOutputInput";
import { RemoveFlowOutputOutput } from "../types/RemoveFlowOutputOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/RemoveFlowOutputInput";
export * from "../types/RemoveFlowOutputOutput";
export * from "../types/RemoveFlowOutputExceptionsUnion";

export class RemoveFlowOutputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveFlowOutputInput,
      OutputTypesUnion,
      RemoveFlowOutputOutput,
      MediaConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveFlowOutput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveFlowOutputInput,
    RemoveFlowOutputOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveFlowOutputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<RemoveFlowOutputInput, RemoveFlowOutputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveFlowOutputInput, RemoveFlowOutputOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
