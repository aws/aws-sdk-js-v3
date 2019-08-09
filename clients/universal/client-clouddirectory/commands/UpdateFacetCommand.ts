import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFacet } from "../model/UpdateFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFacetInput } from "../types/UpdateFacetInput";
import { UpdateFacetOutput } from "../types/UpdateFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpdateFacetInput";
export * from "../types/UpdateFacetOutput";
export * from "../types/UpdateFacetExceptionsUnion";

export class UpdateFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFacetInput,
      OutputTypesUnion,
      UpdateFacetOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFacetInput,
    UpdateFacetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFacetInput, UpdateFacetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFacetInput, UpdateFacetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
