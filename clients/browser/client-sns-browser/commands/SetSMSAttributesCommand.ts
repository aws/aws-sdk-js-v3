import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetSMSAttributes } from "../model/SetSMSAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetSMSAttributesInput } from "../types/SetSMSAttributesInput";
import { SetSMSAttributesOutput } from "../types/SetSMSAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/SetSMSAttributesInput";
export * from "../types/SetSMSAttributesOutput";
export * from "../types/SetSMSAttributesExceptionsUnion";

export class SetSMSAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetSMSAttributesInput,
      OutputTypesUnion,
      SetSMSAttributesOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = SetSMSAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetSMSAttributesInput,
    SetSMSAttributesOutput,
    Blob
  >();

  constructor(readonly input: SetSMSAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<SetSMSAttributesInput, SetSMSAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetSMSAttributesInput, SetSMSAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
