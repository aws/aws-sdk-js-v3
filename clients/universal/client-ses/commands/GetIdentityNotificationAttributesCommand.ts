import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityNotificationAttributes } from "../model/GetIdentityNotificationAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityNotificationAttributesInput } from "../types/GetIdentityNotificationAttributesInput";
import { GetIdentityNotificationAttributesOutput } from "../types/GetIdentityNotificationAttributesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetIdentityNotificationAttributesInput";
export * from "../types/GetIdentityNotificationAttributesOutput";
export * from "../types/GetIdentityNotificationAttributesExceptionsUnion";

export class GetIdentityNotificationAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityNotificationAttributesInput,
      OutputTypesUnion,
      GetIdentityNotificationAttributesOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetIdentityNotificationAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityNotificationAttributesInput,
    GetIdentityNotificationAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetIdentityNotificationAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityNotificationAttributesInput,
    GetIdentityNotificationAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetIdentityNotificationAttributesInput,
        GetIdentityNotificationAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
