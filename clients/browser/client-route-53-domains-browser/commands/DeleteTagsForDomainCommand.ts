import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTagsForDomain } from "../model/operations/DeleteTagsForDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTagsForDomainInput } from "../types/DeleteTagsForDomainInput";
import { DeleteTagsForDomainOutput } from "../types/DeleteTagsForDomainOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/DeleteTagsForDomainInput";
export * from "../types/DeleteTagsForDomainOutput";
export * from "../types/DeleteTagsForDomainExceptionsUnion";

export class DeleteTagsForDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTagsForDomainInput,
      OutputTypesUnion,
      DeleteTagsForDomainOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTagsForDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTagsForDomainInput,
    DeleteTagsForDomainOutput,
    Blob
  >();

  constructor(readonly input: DeleteTagsForDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTagsForDomainInput,
    DeleteTagsForDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTagsForDomainInput, DeleteTagsForDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
