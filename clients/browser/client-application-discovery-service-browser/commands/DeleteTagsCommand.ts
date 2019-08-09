import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTags } from "../model/DeleteTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTagsInput } from "../types/DeleteTagsInput";
import { DeleteTagsOutput } from "../types/DeleteTagsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DeleteTagsInput";
export * from "../types/DeleteTagsOutput";
export * from "../types/DeleteTagsExceptionsUnion";

export class DeleteTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTagsInput,
      OutputTypesUnion,
      DeleteTagsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTagsInput,
    DeleteTagsOutput,
    Blob
  >();

  constructor(readonly input: DeleteTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTagsInput, DeleteTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTagsInput, DeleteTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
