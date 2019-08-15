import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAnalysisScheme } from "../model/operations/DeleteAnalysisScheme";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAnalysisSchemeInput } from "../types/DeleteAnalysisSchemeInput";
import { DeleteAnalysisSchemeOutput } from "../types/DeleteAnalysisSchemeOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DeleteAnalysisSchemeInput";
export * from "../types/DeleteAnalysisSchemeOutput";
export * from "../types/DeleteAnalysisSchemeExceptionsUnion";

export class DeleteAnalysisSchemeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAnalysisSchemeInput,
      OutputTypesUnion,
      DeleteAnalysisSchemeOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAnalysisScheme;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAnalysisSchemeInput,
    DeleteAnalysisSchemeOutput,
    Blob
  >();

  constructor(readonly input: DeleteAnalysisSchemeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAnalysisSchemeInput,
    DeleteAnalysisSchemeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAnalysisSchemeInput, DeleteAnalysisSchemeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
