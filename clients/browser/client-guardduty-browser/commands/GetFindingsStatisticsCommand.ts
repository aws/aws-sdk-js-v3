import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFindingsStatistics } from "../model/GetFindingsStatistics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFindingsStatisticsInput } from "../types/GetFindingsStatisticsInput";
import { GetFindingsStatisticsOutput } from "../types/GetFindingsStatisticsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetFindingsStatisticsInput";
export * from "../types/GetFindingsStatisticsOutput";
export * from "../types/GetFindingsStatisticsExceptionsUnion";

export class GetFindingsStatisticsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFindingsStatisticsInput,
      OutputTypesUnion,
      GetFindingsStatisticsOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = GetFindingsStatistics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFindingsStatisticsInput,
    GetFindingsStatisticsOutput,
    Blob
  >();

  constructor(readonly input: GetFindingsStatisticsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFindingsStatisticsInput,
    GetFindingsStatisticsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFindingsStatisticsInput, GetFindingsStatisticsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
