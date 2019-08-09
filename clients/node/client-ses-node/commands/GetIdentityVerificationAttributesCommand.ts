import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = GetIdentityVerificationAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityVerificationAttributesInput,
    GetIdentityVerificationAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIdentityVerificationAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
