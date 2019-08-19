import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetScalingPlanResourceForecastData } from "../model/operations/GetScalingPlanResourceForecastData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetScalingPlanResourceForecastDataInput } from "../types/GetScalingPlanResourceForecastDataInput";
import { GetScalingPlanResourceForecastDataOutput } from "../types/GetScalingPlanResourceForecastDataOutput";
import { AutoScalingPlansResolvedConfiguration } from "../AutoScalingPlansConfiguration";
export * from "../types/GetScalingPlanResourceForecastDataInput";
export * from "../types/GetScalingPlanResourceForecastDataOutput";
export * from "../types/GetScalingPlanResourceForecastDataExceptionsUnion";

export class GetScalingPlanResourceForecastDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetScalingPlanResourceForecastDataInput,
      OutputTypesUnion,
      GetScalingPlanResourceForecastDataOutput,
      AutoScalingPlansResolvedConfiguration,
      Blob
    > {
  readonly model = GetScalingPlanResourceForecastData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetScalingPlanResourceForecastDataInput,
    GetScalingPlanResourceForecastDataOutput,
    Blob
  >();

  constructor(readonly input: GetScalingPlanResourceForecastDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingPlansResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetScalingPlanResourceForecastDataInput,
    GetScalingPlanResourceForecastDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetScalingPlanResourceForecastDataInput,
        GetScalingPlanResourceForecastDataOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
