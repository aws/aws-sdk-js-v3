import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeprecateActivityType } from "../model/DeprecateActivityType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprecateActivityTypeInput } from "../types/DeprecateActivityTypeInput";
import { DeprecateActivityTypeOutput } from "../types/DeprecateActivityTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/DeprecateActivityTypeInput";
export * from "../types/DeprecateActivityTypeOutput";
export * from "../types/DeprecateActivityTypeExceptionsUnion";

export class DeprecateActivityTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprecateActivityTypeInput,
      OutputTypesUnion,
      DeprecateActivityTypeOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = DeprecateActivityType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateActivityTypeInput,
    DeprecateActivityTypeOutput,
    Blob
  >();

  constructor(readonly input: DeprecateActivityTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeprecateActivityTypeInput,
    DeprecateActivityTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprecateActivityTypeInput, DeprecateActivityTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
