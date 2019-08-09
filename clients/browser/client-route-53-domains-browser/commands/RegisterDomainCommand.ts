import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterDomain } from "../model/RegisterDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterDomainInput } from "../types/RegisterDomainInput";
import { RegisterDomainOutput } from "../types/RegisterDomainOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/RegisterDomainInput";
export * from "../types/RegisterDomainOutput";
export * from "../types/RegisterDomainExceptionsUnion";

export class RegisterDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterDomainInput,
      OutputTypesUnion,
      RegisterDomainOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterDomainInput,
    RegisterDomainOutput,
    Blob
  >();

  constructor(readonly input: RegisterDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterDomainInput, RegisterDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterDomainInput, RegisterDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
