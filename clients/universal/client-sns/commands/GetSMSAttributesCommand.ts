import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSMSAttributes } from "../model/GetSMSAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSMSAttributesInput } from "../types/GetSMSAttributesInput";
import { GetSMSAttributesOutput } from "../types/GetSMSAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/GetSMSAttributesInput";
export * from "../types/GetSMSAttributesOutput";
export * from "../types/GetSMSAttributesExceptionsUnion";

export class GetSMSAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSMSAttributesInput,
      OutputTypesUnion,
      GetSMSAttributesOutput,
      SNSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSMSAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSMSAttributesInput,
    GetSMSAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSMSAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSMSAttributesInput, GetSMSAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSMSAttributesInput, GetSMSAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
