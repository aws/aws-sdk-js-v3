import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachToIndex } from "../model/AttachToIndex";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachToIndexInput } from "../types/AttachToIndexInput";
import { AttachToIndexOutput } from "../types/AttachToIndexOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/AttachToIndexInput";
export * from "../types/AttachToIndexOutput";
export * from "../types/AttachToIndexExceptionsUnion";

export class AttachToIndexCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachToIndexInput,
      OutputTypesUnion,
      AttachToIndexOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachToIndex;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachToIndexInput,
    AttachToIndexOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachToIndexInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachToIndexInput, AttachToIndexOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachToIndexInput, AttachToIndexOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
