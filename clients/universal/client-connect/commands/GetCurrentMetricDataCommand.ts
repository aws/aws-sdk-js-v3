import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCurrentMetricData } from "../model/GetCurrentMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCurrentMetricDataInput } from "../types/GetCurrentMetricDataInput";
import { GetCurrentMetricDataOutput } from "../types/GetCurrentMetricDataOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/GetCurrentMetricDataInput";
export * from "../types/GetCurrentMetricDataOutput";
export * from "../types/GetCurrentMetricDataExceptionsUnion";

export class GetCurrentMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCurrentMetricDataInput,
      OutputTypesUnion,
      GetCurrentMetricDataOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCurrentMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCurrentMetricDataInput,
    GetCurrentMetricDataOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCurrentMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCurrentMetricDataInput,
    GetCurrentMetricDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCurrentMetricDataInput, GetCurrentMetricDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
