import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStatistics } from "../model/GetStatistics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStatisticsInput } from "../types/GetStatisticsInput";
import { GetStatisticsOutput } from "../types/GetStatisticsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetStatisticsInput";
export * from "../types/GetStatisticsOutput";
export * from "../types/GetStatisticsExceptionsUnion";

export class GetStatisticsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStatisticsInput,
      OutputTypesUnion,
      GetStatisticsOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetStatistics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStatisticsInput,
    GetStatisticsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetStatisticsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<GetStatisticsInput, GetStatisticsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStatisticsInput, GetStatisticsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
