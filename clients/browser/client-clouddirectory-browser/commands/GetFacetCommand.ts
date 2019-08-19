import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFacet } from "../model/operations/GetFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFacetInput } from "../types/GetFacetInput";
import { GetFacetOutput } from "../types/GetFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetFacetInput";
export * from "../types/GetFacetOutput";
export * from "../types/GetFacetExceptionsUnion";

export class GetFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFacetInput,
      OutputTypesUnion,
      GetFacetOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = GetFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFacetInput,
    GetFacetOutput,
    Blob
  >();

  constructor(readonly input: GetFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFacetInput, GetFacetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFacetInput, GetFacetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
