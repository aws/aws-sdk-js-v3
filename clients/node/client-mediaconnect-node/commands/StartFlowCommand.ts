import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartFlow } from "../model/StartFlow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartFlowInput } from "../types/StartFlowInput";
import { StartFlowOutput } from "../types/StartFlowOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/StartFlowInput";
export * from "../types/StartFlowOutput";
export * from "../types/StartFlowExceptionsUnion";

export class StartFlowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartFlowInput,
      OutputTypesUnion,
      StartFlowOutput,
      MediaConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartFlowInput,
    StartFlowOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<StartFlowInput, StartFlowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartFlowInput, StartFlowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
