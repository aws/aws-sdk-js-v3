import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TransferDomain } from "../model/operations/TransferDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TransferDomainInput } from "../types/TransferDomainInput";
import { TransferDomainOutput } from "../types/TransferDomainOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/TransferDomainInput";
export * from "../types/TransferDomainOutput";
export * from "../types/TransferDomainExceptionsUnion";

export class TransferDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TransferDomainInput,
      OutputTypesUnion,
      TransferDomainOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = TransferDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TransferDomainInput,
    TransferDomainOutput,
    Blob
  >();

  constructor(readonly input: TransferDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<TransferDomainInput, TransferDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TransferDomainInput, TransferDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
