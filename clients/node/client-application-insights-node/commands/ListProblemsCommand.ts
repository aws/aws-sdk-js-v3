import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListProblems } from "../model/ListProblems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProblemsInput } from "../types/ListProblemsInput";
import { ListProblemsOutput } from "../types/ListProblemsOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/ListProblemsInput";
export * from "../types/ListProblemsOutput";
export * from "../types/ListProblemsExceptionsUnion";

export class ListProblemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProblemsInput,
      OutputTypesUnion,
      ListProblemsOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListProblems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProblemsInput,
    ListProblemsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListProblemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListProblemsInput, ListProblemsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProblemsInput, ListProblemsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
