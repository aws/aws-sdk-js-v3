import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTerminology } from "../model/DeleteTerminology";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTerminologyInput } from "../types/DeleteTerminologyInput";
import { DeleteTerminologyOutput } from "../types/DeleteTerminologyOutput";
import { TranslateResolvedConfiguration } from "../TranslateConfiguration";
export * from "../types/DeleteTerminologyInput";
export * from "../types/DeleteTerminologyOutput";
export * from "../types/DeleteTerminologyExceptionsUnion";

export class DeleteTerminologyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTerminologyInput,
      OutputTypesUnion,
      DeleteTerminologyOutput,
      TranslateResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTerminology;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTerminologyInput,
    DeleteTerminologyOutput,
    Blob
  >();

  constructor(readonly input: DeleteTerminologyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TranslateResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTerminologyInput, DeleteTerminologyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTerminologyInput, DeleteTerminologyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
