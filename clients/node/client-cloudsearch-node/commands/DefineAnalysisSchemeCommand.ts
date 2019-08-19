import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DefineAnalysisScheme } from "../model/operations/DefineAnalysisScheme";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DefineAnalysisSchemeInput } from "../types/DefineAnalysisSchemeInput";
import { DefineAnalysisSchemeOutput } from "../types/DefineAnalysisSchemeOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DefineAnalysisSchemeInput";
export * from "../types/DefineAnalysisSchemeOutput";
export * from "../types/DefineAnalysisSchemeExceptionsUnion";

export class DefineAnalysisSchemeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DefineAnalysisSchemeInput,
      OutputTypesUnion,
      DefineAnalysisSchemeOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DefineAnalysisScheme;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DefineAnalysisSchemeInput,
    DefineAnalysisSchemeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DefineAnalysisSchemeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DefineAnalysisSchemeInput,
    DefineAnalysisSchemeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DefineAnalysisSchemeInput, DefineAnalysisSchemeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
