import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTypedLinkFacet } from "../model/CreateTypedLinkFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTypedLinkFacetInput } from "../types/CreateTypedLinkFacetInput";
import { CreateTypedLinkFacetOutput } from "../types/CreateTypedLinkFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/CreateTypedLinkFacetInput";
export * from "../types/CreateTypedLinkFacetOutput";
export * from "../types/CreateTypedLinkFacetExceptionsUnion";

export class CreateTypedLinkFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTypedLinkFacetInput,
      OutputTypesUnion,
      CreateTypedLinkFacetOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTypedLinkFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTypedLinkFacetInput,
    CreateTypedLinkFacetOutput,
    Blob
  >();

  constructor(readonly input: CreateTypedLinkFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTypedLinkFacetInput,
    CreateTypedLinkFacetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTypedLinkFacetInput, CreateTypedLinkFacetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
