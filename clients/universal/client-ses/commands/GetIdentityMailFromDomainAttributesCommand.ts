import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityMailFromDomainAttributes } from "../model/GetIdentityMailFromDomainAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityMailFromDomainAttributesInput } from "../types/GetIdentityMailFromDomainAttributesInput";
import { GetIdentityMailFromDomainAttributesOutput } from "../types/GetIdentityMailFromDomainAttributesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetIdentityMailFromDomainAttributesInput";
export * from "../types/GetIdentityMailFromDomainAttributesOutput";
export * from "../types/GetIdentityMailFromDomainAttributesExceptionsUnion";

export class GetIdentityMailFromDomainAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityMailFromDomainAttributesInput,
      OutputTypesUnion,
      GetIdentityMailFromDomainAttributesOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetIdentityMailFromDomainAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityMailFromDomainAttributesInput,
    GetIdentityMailFromDomainAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetIdentityMailFromDomainAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityMailFromDomainAttributesInput,
    GetIdentityMailFromDomainAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetIdentityMailFromDomainAttributesInput,
        GetIdentityMailFromDomainAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
