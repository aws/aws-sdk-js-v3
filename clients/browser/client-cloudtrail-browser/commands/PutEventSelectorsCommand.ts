import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutEventSelectors } from "../model/operations/PutEventSelectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEventSelectorsInput } from "../types/PutEventSelectorsInput";
import { PutEventSelectorsOutput } from "../types/PutEventSelectorsOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/PutEventSelectorsInput";
export * from "../types/PutEventSelectorsOutput";
export * from "../types/PutEventSelectorsExceptionsUnion";

export class PutEventSelectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEventSelectorsInput,
      OutputTypesUnion,
      PutEventSelectorsOutput,
      CloudTrailResolvedConfiguration,
      Blob
    > {
  readonly model = PutEventSelectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEventSelectorsInput,
    PutEventSelectorsOutput,
    Blob
  >();

  constructor(readonly input: PutEventSelectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<PutEventSelectorsInput, PutEventSelectorsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEventSelectorsInput, PutEventSelectorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
