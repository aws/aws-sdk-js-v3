import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableDomainAutoRenew } from "../model/operations/DisableDomainAutoRenew";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableDomainAutoRenewInput } from "../types/DisableDomainAutoRenewInput";
import { DisableDomainAutoRenewOutput } from "../types/DisableDomainAutoRenewOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/DisableDomainAutoRenewInput";
export * from "../types/DisableDomainAutoRenewOutput";
export * from "../types/DisableDomainAutoRenewExceptionsUnion";

export class DisableDomainAutoRenewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableDomainAutoRenewInput,
      OutputTypesUnion,
      DisableDomainAutoRenewOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = DisableDomainAutoRenew;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableDomainAutoRenewInput,
    DisableDomainAutoRenewOutput,
    Blob
  >();

  constructor(readonly input: DisableDomainAutoRenewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableDomainAutoRenewInput,
    DisableDomainAutoRenewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableDomainAutoRenewInput, DisableDomainAutoRenewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
