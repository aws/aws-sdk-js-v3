import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSamplingStatisticSummaries } from "../model/GetSamplingStatisticSummaries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSamplingStatisticSummariesInput } from "../types/GetSamplingStatisticSummariesInput";
import { GetSamplingStatisticSummariesOutput } from "../types/GetSamplingStatisticSummariesOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetSamplingStatisticSummariesInput";
export * from "../types/GetSamplingStatisticSummariesOutput";
export * from "../types/GetSamplingStatisticSummariesExceptionsUnion";

export class GetSamplingStatisticSummariesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSamplingStatisticSummariesInput,
      OutputTypesUnion,
      GetSamplingStatisticSummariesOutput,
      XRayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSamplingStatisticSummaries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSamplingStatisticSummariesInput,
    GetSamplingStatisticSummariesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSamplingStatisticSummariesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSamplingStatisticSummariesInput,
    GetSamplingStatisticSummariesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetSamplingStatisticSummariesInput,
        GetSamplingStatisticSummariesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
