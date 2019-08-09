import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFacet } from "../model/DeleteFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFacetInput } from "../types/DeleteFacetInput";
import { DeleteFacetOutput } from "../types/DeleteFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DeleteFacetInput";
export * from "../types/DeleteFacetOutput";
export * from "../types/DeleteFacetExceptionsUnion";

export class DeleteFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFacetInput,
      OutputTypesUnion,
      DeleteFacetOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFacetInput,
    DeleteFacetOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFacetInput, DeleteFacetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFacetInput, DeleteFacetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
