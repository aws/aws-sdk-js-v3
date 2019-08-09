import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveTargets } from "../model/RemoveTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTargetsInput } from "../types/RemoveTargetsInput";
import { RemoveTargetsOutput } from "../types/RemoveTargetsOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/RemoveTargetsInput";
export * from "../types/RemoveTargetsOutput";
export * from "../types/RemoveTargetsExceptionsUnion";

export class RemoveTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTargetsInput,
      OutputTypesUnion,
      RemoveTargetsOutput,
      EventBridgeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTargetsInput,
    RemoveTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<RemoveTargetsInput, RemoveTargetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveTargetsInput, RemoveTargetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
