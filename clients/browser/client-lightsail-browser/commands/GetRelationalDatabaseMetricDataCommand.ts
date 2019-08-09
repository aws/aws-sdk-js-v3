import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabaseMetricData } from "../model/GetRelationalDatabaseMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseMetricDataInput } from "../types/GetRelationalDatabaseMetricDataInput";
import { GetRelationalDatabaseMetricDataOutput } from "../types/GetRelationalDatabaseMetricDataOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseMetricDataInput";
export * from "../types/GetRelationalDatabaseMetricDataOutput";
export * from "../types/GetRelationalDatabaseMetricDataExceptionsUnion";

export class GetRelationalDatabaseMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseMetricDataInput,
      OutputTypesUnion,
      GetRelationalDatabaseMetricDataOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetRelationalDatabaseMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseMetricDataInput,
    GetRelationalDatabaseMetricDataOutput,
    Blob
  >();

  constructor(readonly input: GetRelationalDatabaseMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseMetricDataInput,
    GetRelationalDatabaseMetricDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseMetricDataInput,
        GetRelationalDatabaseMetricDataOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
