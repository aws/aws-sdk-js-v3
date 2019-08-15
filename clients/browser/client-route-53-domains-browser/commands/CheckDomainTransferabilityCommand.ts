import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CheckDomainTransferability } from "../model/operations/CheckDomainTransferability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CheckDomainTransferabilityInput } from "../types/CheckDomainTransferabilityInput";
import { CheckDomainTransferabilityOutput } from "../types/CheckDomainTransferabilityOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/CheckDomainTransferabilityInput";
export * from "../types/CheckDomainTransferabilityOutput";
export * from "../types/CheckDomainTransferabilityExceptionsUnion";

export class CheckDomainTransferabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CheckDomainTransferabilityInput,
      OutputTypesUnion,
      CheckDomainTransferabilityOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = CheckDomainTransferability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CheckDomainTransferabilityInput,
    CheckDomainTransferabilityOutput,
    Blob
  >();

  constructor(readonly input: CheckDomainTransferabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CheckDomainTransferabilityInput,
    CheckDomainTransferabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CheckDomainTransferabilityInput,
        CheckDomainTransferabilityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
