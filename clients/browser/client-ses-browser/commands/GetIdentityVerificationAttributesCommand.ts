import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityVerificationAttributes } from "../model/GetIdentityVerificationAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityVerificationAttributesInput } from "../types/GetIdentityVerificationAttributesInput";
import { GetIdentityVerificationAttributesOutput } from "../types/GetIdentityVerificationAttributesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetIdentityVerificationAttributesInput";
export * from "../types/GetIdentityVerificationAttributesOutput";
export * from "../types/GetIdentityVerificationAttributesExceptionsUnion";

export class GetIdentityVerificationAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityVerificationAttributesInput,
      OutputTypesUnion,
      GetIdentityVerificationAttributesOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = GetIdentityVerificationAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityVerificationAttributesInput,
    GetIdentityVerificationAttributesOutput,
    Blob
  >();

  constructor(readonly input: GetIdentityVerificationAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityVerificationAttributesInput,
    GetIdentityVerificationAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetIdentityVerificationAttributesInput,
        GetIdentityVerificationAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
