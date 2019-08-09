import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTableVersion } from "../model/DeleteTableVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTableVersionInput } from "../types/DeleteTableVersionInput";
import { DeleteTableVersionOutput } from "../types/DeleteTableVersionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteTableVersionInput";
export * from "../types/DeleteTableVersionOutput";
export * from "../types/DeleteTableVersionExceptionsUnion";

export class DeleteTableVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTableVersionInput,
      OutputTypesUnion,
      DeleteTableVersionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTableVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTableVersionInput,
    DeleteTableVersionOutput,
    Blob
  >();

  constructor(readonly input: DeleteTableVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTableVersionInput,
    DeleteTableVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTableVersionInput, DeleteTableVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
