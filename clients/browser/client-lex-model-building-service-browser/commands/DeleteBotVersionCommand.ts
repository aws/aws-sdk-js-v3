import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBotVersion } from "../model/DeleteBotVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBotVersionInput } from "../types/DeleteBotVersionInput";
import { DeleteBotVersionOutput } from "../types/DeleteBotVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteBotVersionInput";
export * from "../types/DeleteBotVersionOutput";
export * from "../types/DeleteBotVersionExceptionsUnion";

export class DeleteBotVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBotVersionInput,
      OutputTypesUnion,
      DeleteBotVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBotVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBotVersionInput,
    DeleteBotVersionOutput,
    Blob
  >();

  constructor(readonly input: DeleteBotVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBotVersionInput, DeleteBotVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBotVersionInput, DeleteBotVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
