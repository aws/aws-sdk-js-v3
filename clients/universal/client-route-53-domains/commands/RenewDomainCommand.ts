import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RenewDomain } from "../model/RenewDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RenewDomainInput } from "../types/RenewDomainInput";
import { RenewDomainOutput } from "../types/RenewDomainOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/RenewDomainInput";
export * from "../types/RenewDomainOutput";
export * from "../types/RenewDomainExceptionsUnion";

export class RenewDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RenewDomainInput,
      OutputTypesUnion,
      RenewDomainOutput,
      Route53DomainsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RenewDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RenewDomainInput,
    RenewDomainOutput,
    Uint8Array
  >();

  constructor(readonly input: RenewDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<RenewDomainInput, RenewDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RenewDomainInput, RenewDomainOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
