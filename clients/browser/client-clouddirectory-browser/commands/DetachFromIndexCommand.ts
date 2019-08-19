import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachFromIndex } from "../model/operations/DetachFromIndex";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachFromIndexInput } from "../types/DetachFromIndexInput";
import { DetachFromIndexOutput } from "../types/DetachFromIndexOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DetachFromIndexInput";
export * from "../types/DetachFromIndexOutput";
export * from "../types/DetachFromIndexExceptionsUnion";

export class DetachFromIndexCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachFromIndexInput,
      OutputTypesUnion,
      DetachFromIndexOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = DetachFromIndex;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachFromIndexInput,
    DetachFromIndexOutput,
    Blob
  >();

  constructor(readonly input: DetachFromIndexInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachFromIndexInput, DetachFromIndexOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachFromIndexInput, DetachFromIndexOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
