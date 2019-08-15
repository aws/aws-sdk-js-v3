import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDomainContactPrivacy } from "../model/operations/UpdateDomainContactPrivacy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainContactPrivacyInput } from "../types/UpdateDomainContactPrivacyInput";
import { UpdateDomainContactPrivacyOutput } from "../types/UpdateDomainContactPrivacyOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/UpdateDomainContactPrivacyInput";
export * from "../types/UpdateDomainContactPrivacyOutput";
export * from "../types/UpdateDomainContactPrivacyExceptionsUnion";

export class UpdateDomainContactPrivacyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainContactPrivacyInput,
      OutputTypesUnion,
      UpdateDomainContactPrivacyOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDomainContactPrivacy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainContactPrivacyInput,
    UpdateDomainContactPrivacyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDomainContactPrivacyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDomainContactPrivacyInput,
    UpdateDomainContactPrivacyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateDomainContactPrivacyInput,
        UpdateDomainContactPrivacyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
