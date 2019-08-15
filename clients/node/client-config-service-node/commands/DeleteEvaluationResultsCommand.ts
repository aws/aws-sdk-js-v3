import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEvaluationResults } from "../model/operations/DeleteEvaluationResults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEvaluationResultsInput } from "../types/DeleteEvaluationResultsInput";
import { DeleteEvaluationResultsOutput } from "../types/DeleteEvaluationResultsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteEvaluationResultsInput";
export * from "../types/DeleteEvaluationResultsOutput";
export * from "../types/DeleteEvaluationResultsExceptionsUnion";

export class DeleteEvaluationResultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEvaluationResultsInput,
      OutputTypesUnion,
      DeleteEvaluationResultsOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEvaluationResults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEvaluationResultsInput,
    DeleteEvaluationResultsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEvaluationResultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEvaluationResultsInput,
    DeleteEvaluationResultsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEvaluationResultsInput, DeleteEvaluationResultsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
