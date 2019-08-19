import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPolicyAttachments } from "../model/operations/ListPolicyAttachments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPolicyAttachmentsInput } from "../types/ListPolicyAttachmentsInput";
import { ListPolicyAttachmentsOutput } from "../types/ListPolicyAttachmentsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListPolicyAttachmentsInput";
export * from "../types/ListPolicyAttachmentsOutput";
export * from "../types/ListPolicyAttachmentsExceptionsUnion";

export class ListPolicyAttachmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPolicyAttachmentsInput,
      OutputTypesUnion,
      ListPolicyAttachmentsOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListPolicyAttachments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPolicyAttachmentsInput,
    ListPolicyAttachmentsOutput,
    Blob
  >();

  constructor(readonly input: ListPolicyAttachmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPolicyAttachmentsInput,
    ListPolicyAttachmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPolicyAttachmentsInput, ListPolicyAttachmentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
