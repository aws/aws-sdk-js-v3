import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PreviewAgents } from "../model/PreviewAgents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PreviewAgentsInput } from "../types/PreviewAgentsInput";
import { PreviewAgentsOutput } from "../types/PreviewAgentsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/PreviewAgentsInput";
export * from "../types/PreviewAgentsOutput";
export * from "../types/PreviewAgentsExceptionsUnion";

export class PreviewAgentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PreviewAgentsInput,
      OutputTypesUnion,
      PreviewAgentsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PreviewAgents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PreviewAgentsInput,
    PreviewAgentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PreviewAgentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<PreviewAgentsInput, PreviewAgentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PreviewAgentsInput, PreviewAgentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
