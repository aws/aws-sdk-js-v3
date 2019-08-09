import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInsightResults } from "../model/GetInsightResults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInsightResultsInput } from "../types/GetInsightResultsInput";
import { GetInsightResultsOutput } from "../types/GetInsightResultsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/GetInsightResultsInput";
export * from "../types/GetInsightResultsOutput";
export * from "../types/GetInsightResultsExceptionsUnion";

export class GetInsightResultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInsightResultsInput,
      OutputTypesUnion,
      GetInsightResultsOutput,
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetInsightResults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInsightResultsInput,
    GetInsightResultsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetInsightResultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInsightResultsInput, GetInsightResultsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInsightResultsInput, GetInsightResultsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
