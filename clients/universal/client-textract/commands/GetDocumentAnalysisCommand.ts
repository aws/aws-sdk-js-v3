import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDocumentAnalysis } from "../model/GetDocumentAnalysis";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentAnalysisInput } from "../types/GetDocumentAnalysisInput";
import { GetDocumentAnalysisOutput } from "../types/GetDocumentAnalysisOutput";
import { TextractResolvedConfiguration } from "../TextractConfiguration";
export * from "../types/GetDocumentAnalysisInput";
export * from "../types/GetDocumentAnalysisOutput";
export * from "../types/GetDocumentAnalysisExceptionsUnion";

export class GetDocumentAnalysisCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentAnalysisInput,
      OutputTypesUnion,
      GetDocumentAnalysisOutput,
      TextractResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDocumentAnalysis;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentAnalysisInput,
    GetDocumentAnalysisOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDocumentAnalysisInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: TextractResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentAnalysisInput,
    GetDocumentAnalysisOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentAnalysisInput, GetDocumentAnalysisOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
