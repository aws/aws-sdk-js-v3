import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetIdentityMailFromDomain } from "../model/operations/SetIdentityMailFromDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIdentityMailFromDomainInput } from "../types/SetIdentityMailFromDomainInput";
import { SetIdentityMailFromDomainOutput } from "../types/SetIdentityMailFromDomainOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetIdentityMailFromDomainInput";
export * from "../types/SetIdentityMailFromDomainOutput";
export * from "../types/SetIdentityMailFromDomainExceptionsUnion";

export class SetIdentityMailFromDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIdentityMailFromDomainInput,
      OutputTypesUnion,
      SetIdentityMailFromDomainOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = SetIdentityMailFromDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityMailFromDomainInput,
    SetIdentityMailFromDomainOutput,
    Blob
  >();

  constructor(readonly input: SetIdentityMailFromDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetIdentityMailFromDomainInput,
    SetIdentityMailFromDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetIdentityMailFromDomainInput, SetIdentityMailFromDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
