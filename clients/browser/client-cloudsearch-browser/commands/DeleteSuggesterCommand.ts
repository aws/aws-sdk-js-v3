import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSuggester } from "../model/operations/DeleteSuggester";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSuggesterInput } from "../types/DeleteSuggesterInput";
import { DeleteSuggesterOutput } from "../types/DeleteSuggesterOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DeleteSuggesterInput";
export * from "../types/DeleteSuggesterOutput";
export * from "../types/DeleteSuggesterExceptionsUnion";

export class DeleteSuggesterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSuggesterInput,
      OutputTypesUnion,
      DeleteSuggesterOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSuggester;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSuggesterInput,
    DeleteSuggesterOutput,
    Blob
  >();

  constructor(readonly input: DeleteSuggesterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSuggesterInput, DeleteSuggesterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSuggesterInput, DeleteSuggesterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
