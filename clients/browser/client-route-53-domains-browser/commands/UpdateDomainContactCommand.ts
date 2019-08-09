import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDomainContact } from "../model/UpdateDomainContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainContactInput } from "../types/UpdateDomainContactInput";
import { UpdateDomainContactOutput } from "../types/UpdateDomainContactOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/UpdateDomainContactInput";
export * from "../types/UpdateDomainContactOutput";
export * from "../types/UpdateDomainContactExceptionsUnion";

export class UpdateDomainContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainContactInput,
      OutputTypesUnion,
      UpdateDomainContactOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDomainContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainContactInput,
    UpdateDomainContactOutput,
    Blob
  >();

  constructor(readonly input: UpdateDomainContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDomainContactInput,
    UpdateDomainContactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDomainContactInput, UpdateDomainContactOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
