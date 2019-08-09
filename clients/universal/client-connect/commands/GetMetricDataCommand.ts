import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMetricData } from "../model/GetMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMetricDataInput } from "../types/GetMetricDataInput";
import { GetMetricDataOutput } from "../types/GetMetricDataOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/GetMetricDataInput";
export * from "../types/GetMetricDataOutput";
export * from "../types/GetMetricDataExceptionsUnion";

export class GetMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMetricDataInput,
      OutputTypesUnion,
      GetMetricDataOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMetricDataInput,
    GetMetricDataOutput,
    Uint8Array
  >();

  constructor(readonly input: GetMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMetricDataInput, GetMetricDataOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMetricDataInput, GetMetricDataOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
