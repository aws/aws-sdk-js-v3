import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddFlowOutputs } from "../model/AddFlowOutputs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddFlowOutputsInput } from "../types/AddFlowOutputsInput";
import { AddFlowOutputsOutput } from "../types/AddFlowOutputsOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/AddFlowOutputsInput";
export * from "../types/AddFlowOutputsOutput";
export * from "../types/AddFlowOutputsExceptionsUnion";

export class AddFlowOutputsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddFlowOutputsInput,
      OutputTypesUnion,
      AddFlowOutputsOutput,
      MediaConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddFlowOutputs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddFlowOutputsInput,
    AddFlowOutputsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddFlowOutputsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<AddFlowOutputsInput, AddFlowOutputsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddFlowOutputsInput, AddFlowOutputsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
