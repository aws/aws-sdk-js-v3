import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteImage } from "../model/DeleteImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteImageInput } from "../types/DeleteImageInput";
import { DeleteImageOutput } from "../types/DeleteImageOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DeleteImageInput";
export * from "../types/DeleteImageOutput";
export * from "../types/DeleteImageExceptionsUnion";

export class DeleteImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteImageInput,
      OutputTypesUnion,
      DeleteImageOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteImageInput,
    DeleteImageOutput,
    Blob
  >();

  constructor(readonly input: DeleteImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteImageInput, DeleteImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteImageInput, DeleteImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
