import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeProblemObservations } from "../model/DescribeProblemObservations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProblemObservationsInput } from "../types/DescribeProblemObservationsInput";
import { DescribeProblemObservationsOutput } from "../types/DescribeProblemObservationsOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DescribeProblemObservationsInput";
export * from "../types/DescribeProblemObservationsOutput";
export * from "../types/DescribeProblemObservationsExceptionsUnion";

export class DescribeProblemObservationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProblemObservationsInput,
      OutputTypesUnion,
      DescribeProblemObservationsOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeProblemObservations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProblemObservationsInput,
    DescribeProblemObservationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeProblemObservationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProblemObservationsInput,
    DescribeProblemObservationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProblemObservationsInput,
        DescribeProblemObservationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
