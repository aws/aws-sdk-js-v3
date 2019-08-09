import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachObject } from "../model/AttachObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachObjectInput } from "../types/AttachObjectInput";
import { AttachObjectOutput } from "../types/AttachObjectOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/AttachObjectInput";
export * from "../types/AttachObjectOutput";
export * from "../types/AttachObjectExceptionsUnion";

export class AttachObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachObjectInput,
      OutputTypesUnion,
      AttachObjectOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachObjectInput,
    AttachObjectOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachObjectInput, AttachObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachObjectInput, AttachObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
