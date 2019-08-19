import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UndeprecateActivityType } from "../model/operations/UndeprecateActivityType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UndeprecateActivityTypeInput } from "../types/UndeprecateActivityTypeInput";
import { UndeprecateActivityTypeOutput } from "../types/UndeprecateActivityTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/UndeprecateActivityTypeInput";
export * from "../types/UndeprecateActivityTypeOutput";
export * from "../types/UndeprecateActivityTypeExceptionsUnion";

export class UndeprecateActivityTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UndeprecateActivityTypeInput,
      OutputTypesUnion,
      UndeprecateActivityTypeOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = UndeprecateActivityType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UndeprecateActivityTypeInput,
    UndeprecateActivityTypeOutput,
    Blob
  >();

  constructor(readonly input: UndeprecateActivityTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UndeprecateActivityTypeInput,
    UndeprecateActivityTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UndeprecateActivityTypeInput, UndeprecateActivityTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
