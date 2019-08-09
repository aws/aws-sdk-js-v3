import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstanceMetricData } from "../model/GetInstanceMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceMetricDataInput } from "../types/GetInstanceMetricDataInput";
import { GetInstanceMetricDataOutput } from "../types/GetInstanceMetricDataOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstanceMetricDataInput";
export * from "../types/GetInstanceMetricDataOutput";
export * from "../types/GetInstanceMetricDataExceptionsUnion";

export class GetInstanceMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceMetricDataInput,
      OutputTypesUnion,
      GetInstanceMetricDataOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetInstanceMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceMetricDataInput,
    GetInstanceMetricDataOutput,
    Blob
  >();

  constructor(readonly input: GetInstanceMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstanceMetricDataInput,
    GetInstanceMetricDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceMetricDataInput, GetInstanceMetricDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
