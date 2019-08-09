import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDocumentAnalysis } from "../model/StartDocumentAnalysis";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDocumentAnalysisInput } from "../types/StartDocumentAnalysisInput";
import { StartDocumentAnalysisOutput } from "../types/StartDocumentAnalysisOutput";
import { TextractResolvedConfiguration } from "../TextractConfiguration";
export * from "../types/StartDocumentAnalysisInput";
export * from "../types/StartDocumentAnalysisOutput";
export * from "../types/StartDocumentAnalysisExceptionsUnion";

export class StartDocumentAnalysisCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDocumentAnalysisInput,
      OutputTypesUnion,
      StartDocumentAnalysisOutput,
      TextractResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartDocumentAnalysis;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDocumentAnalysisInput,
    StartDocumentAnalysisOutput,
    Uint8Array
  >();

  constructor(readonly input: StartDocumentAnalysisInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: TextractResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartDocumentAnalysisInput,
    StartDocumentAnalysisOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartDocumentAnalysisInput, StartDocumentAnalysisOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
