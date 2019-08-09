import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFacet } from "../model/CreateFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFacetInput } from "../types/CreateFacetInput";
import { CreateFacetOutput } from "../types/CreateFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/CreateFacetInput";
export * from "../types/CreateFacetOutput";
export * from "../types/CreateFacetExceptionsUnion";

export class CreateFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFacetInput,
      OutputTypesUnion,
      CreateFacetOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFacetInput,
    CreateFacetOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFacetInput, CreateFacetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFacetInput, CreateFacetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
