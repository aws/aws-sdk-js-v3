import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetQualificationScore } from "../model/operations/GetQualificationScore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQualificationScoreInput } from "../types/GetQualificationScoreInput";
import { GetQualificationScoreOutput } from "../types/GetQualificationScoreOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/GetQualificationScoreInput";
export * from "../types/GetQualificationScoreOutput";
export * from "../types/GetQualificationScoreExceptionsUnion";

export class GetQualificationScoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQualificationScoreInput,
      OutputTypesUnion,
      GetQualificationScoreOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = GetQualificationScore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQualificationScoreInput,
    GetQualificationScoreOutput,
    Blob
  >();

  constructor(readonly input: GetQualificationScoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetQualificationScoreInput,
    GetQualificationScoreOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQualificationScoreInput, GetQualificationScoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
