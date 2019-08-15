import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomainDetail } from "../model/operations/GetDomainDetail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainDetailInput } from "../types/GetDomainDetailInput";
import { GetDomainDetailOutput } from "../types/GetDomainDetailOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/GetDomainDetailInput";
export * from "../types/GetDomainDetailOutput";
export * from "../types/GetDomainDetailExceptionsUnion";

export class GetDomainDetailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainDetailInput,
      OutputTypesUnion,
      GetDomainDetailOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = GetDomainDetail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainDetailInput,
    GetDomainDetailOutput,
    Blob
  >();

  constructor(readonly input: GetDomainDetailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDomainDetailInput, GetDomainDetailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainDetailInput, GetDomainDetailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
