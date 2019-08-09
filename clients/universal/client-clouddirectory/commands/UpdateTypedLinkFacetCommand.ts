import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTypedLinkFacet } from "../model/UpdateTypedLinkFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTypedLinkFacetInput } from "../types/UpdateTypedLinkFacetInput";
import { UpdateTypedLinkFacetOutput } from "../types/UpdateTypedLinkFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpdateTypedLinkFacetInput";
export * from "../types/UpdateTypedLinkFacetOutput";
export * from "../types/UpdateTypedLinkFacetExceptionsUnion";

export class UpdateTypedLinkFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTypedLinkFacetInput,
      OutputTypesUnion,
      UpdateTypedLinkFacetOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateTypedLinkFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTypedLinkFacetInput,
    UpdateTypedLinkFacetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateTypedLinkFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateTypedLinkFacetInput,
    UpdateTypedLinkFacetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTypedLinkFacetInput, UpdateTypedLinkFacetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
