import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUsageForecast } from "../model/operations/GetUsageForecast";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUsageForecastInput } from "../types/GetUsageForecastInput";
import { GetUsageForecastOutput } from "../types/GetUsageForecastOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetUsageForecastInput";
export * from "../types/GetUsageForecastOutput";
export * from "../types/GetUsageForecastExceptionsUnion";

export class GetUsageForecastCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUsageForecastInput,
      OutputTypesUnion,
      GetUsageForecastOutput,
      CostExplorerResolvedConfiguration,
      Blob
    > {
  readonly model = GetUsageForecast;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsageForecastInput,
    GetUsageForecastOutput,
    Blob
  >();

  constructor(readonly input: GetUsageForecastInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUsageForecastInput, GetUsageForecastOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUsageForecastInput, GetUsageForecastOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
