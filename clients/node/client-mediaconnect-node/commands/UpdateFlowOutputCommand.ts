import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFlowOutput } from "../model/UpdateFlowOutput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFlowOutputInput } from "../types/UpdateFlowOutputInput";
import { UpdateFlowOutputOutput } from "../types/UpdateFlowOutputOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/UpdateFlowOutputInput";
export * from "../types/UpdateFlowOutputOutput";
export * from "../types/UpdateFlowOutputExceptionsUnion";

export class UpdateFlowOutputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFlowOutputInput,
      OutputTypesUnion,
      UpdateFlowOutputOutput,
      MediaConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFlowOutput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFlowOutputInput,
    UpdateFlowOutputOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFlowOutputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFlowOutputInput, UpdateFlowOutputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFlowOutputInput, UpdateFlowOutputOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
