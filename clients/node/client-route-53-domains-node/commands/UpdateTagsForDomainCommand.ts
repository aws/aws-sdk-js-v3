import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateTagsForDomain } from "../model/operations/UpdateTagsForDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTagsForDomainInput } from "../types/UpdateTagsForDomainInput";
import { UpdateTagsForDomainOutput } from "../types/UpdateTagsForDomainOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/UpdateTagsForDomainInput";
export * from "../types/UpdateTagsForDomainOutput";
export * from "../types/UpdateTagsForDomainExceptionsUnion";

export class UpdateTagsForDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTagsForDomainInput,
      OutputTypesUnion,
      UpdateTagsForDomainOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateTagsForDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTagsForDomainInput,
    UpdateTagsForDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateTagsForDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateTagsForDomainInput,
    UpdateTagsForDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTagsForDomainInput, UpdateTagsForDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
