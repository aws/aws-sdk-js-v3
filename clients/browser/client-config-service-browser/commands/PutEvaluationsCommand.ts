import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutEvaluations } from "../model/operations/PutEvaluations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEvaluationsInput } from "../types/PutEvaluationsInput";
import { PutEvaluationsOutput } from "../types/PutEvaluationsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutEvaluationsInput";
export * from "../types/PutEvaluationsOutput";
export * from "../types/PutEvaluationsExceptionsUnion";

export class PutEvaluationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEvaluationsInput,
      OutputTypesUnion,
      PutEvaluationsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = PutEvaluations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEvaluationsInput,
    PutEvaluationsOutput,
    Blob
  >();

  constructor(readonly input: PutEvaluationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PutEvaluationsInput, PutEvaluationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEvaluationsInput, PutEvaluationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
