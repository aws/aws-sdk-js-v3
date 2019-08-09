import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachObject } from "../model/DetachObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachObjectInput } from "../types/DetachObjectInput";
import { DetachObjectOutput } from "../types/DetachObjectOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DetachObjectInput";
export * from "../types/DetachObjectOutput";
export * from "../types/DetachObjectExceptionsUnion";

export class DetachObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachObjectInput,
      OutputTypesUnion,
      DetachObjectOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DetachObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachObjectInput,
    DetachObjectOutput,
    Uint8Array
  >();

  constructor(readonly input: DetachObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachObjectInput, DetachObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachObjectInput, DetachObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
