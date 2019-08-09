import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInsights } from "../model/GetInsights";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInsightsInput } from "../types/GetInsightsInput";
import { GetInsightsOutput } from "../types/GetInsightsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/GetInsightsInput";
export * from "../types/GetInsightsOutput";
export * from "../types/GetInsightsExceptionsUnion";

export class GetInsightsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInsightsInput,
      OutputTypesUnion,
      GetInsightsOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = GetInsights;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInsightsInput,
    GetInsightsOutput,
    Blob
  >();

  constructor(readonly input: GetInsightsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInsightsInput, GetInsightsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInsightsInput, GetInsightsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
