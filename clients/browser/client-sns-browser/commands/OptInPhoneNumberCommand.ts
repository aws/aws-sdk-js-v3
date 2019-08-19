import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { OptInPhoneNumber } from "../model/operations/OptInPhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { OptInPhoneNumberInput } from "../types/OptInPhoneNumberInput";
import { OptInPhoneNumberOutput } from "../types/OptInPhoneNumberOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/OptInPhoneNumberInput";
export * from "../types/OptInPhoneNumberOutput";
export * from "../types/OptInPhoneNumberExceptionsUnion";

export class OptInPhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      OptInPhoneNumberInput,
      OutputTypesUnion,
      OptInPhoneNumberOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = OptInPhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    OptInPhoneNumberInput,
    OptInPhoneNumberOutput,
    Blob
  >();

  constructor(readonly input: OptInPhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<OptInPhoneNumberInput, OptInPhoneNumberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<OptInPhoneNumberInput, OptInPhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
