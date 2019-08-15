import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutAccountSendingAttributes } from "../model/operations/PutAccountSendingAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAccountSendingAttributesInput } from "../types/PutAccountSendingAttributesInput";
import { PutAccountSendingAttributesOutput } from "../types/PutAccountSendingAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutAccountSendingAttributesInput";
export * from "../types/PutAccountSendingAttributesOutput";
export * from "../types/PutAccountSendingAttributesExceptionsUnion";

export class PutAccountSendingAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAccountSendingAttributesInput,
      OutputTypesUnion,
      PutAccountSendingAttributesOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = PutAccountSendingAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAccountSendingAttributesInput,
    PutAccountSendingAttributesOutput,
    Blob
  >();

  constructor(readonly input: PutAccountSendingAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAccountSendingAttributesInput,
    PutAccountSendingAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutAccountSendingAttributesInput,
        PutAccountSendingAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
