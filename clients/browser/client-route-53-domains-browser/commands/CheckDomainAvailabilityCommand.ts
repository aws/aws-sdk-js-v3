import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CheckDomainAvailability } from "../model/operations/CheckDomainAvailability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CheckDomainAvailabilityInput } from "../types/CheckDomainAvailabilityInput";
import { CheckDomainAvailabilityOutput } from "../types/CheckDomainAvailabilityOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/CheckDomainAvailabilityInput";
export * from "../types/CheckDomainAvailabilityOutput";
export * from "../types/CheckDomainAvailabilityExceptionsUnion";

export class CheckDomainAvailabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CheckDomainAvailabilityInput,
      OutputTypesUnion,
      CheckDomainAvailabilityOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = CheckDomainAvailability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CheckDomainAvailabilityInput,
    CheckDomainAvailabilityOutput,
    Blob
  >();

  constructor(readonly input: CheckDomainAvailabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CheckDomainAvailabilityInput,
    CheckDomainAvailabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CheckDomainAvailabilityInput, CheckDomainAvailabilityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
