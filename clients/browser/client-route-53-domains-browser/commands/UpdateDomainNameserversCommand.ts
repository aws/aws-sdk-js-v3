import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDomainNameservers } from "../model/operations/UpdateDomainNameservers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainNameserversInput } from "../types/UpdateDomainNameserversInput";
import { UpdateDomainNameserversOutput } from "../types/UpdateDomainNameserversOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/UpdateDomainNameserversInput";
export * from "../types/UpdateDomainNameserversOutput";
export * from "../types/UpdateDomainNameserversExceptionsUnion";

export class UpdateDomainNameserversCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainNameserversInput,
      OutputTypesUnion,
      UpdateDomainNameserversOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDomainNameservers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainNameserversInput,
    UpdateDomainNameserversOutput,
    Blob
  >();

  constructor(readonly input: UpdateDomainNameserversInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDomainNameserversInput,
    UpdateDomainNameserversOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDomainNameserversInput, UpdateDomainNameserversOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
