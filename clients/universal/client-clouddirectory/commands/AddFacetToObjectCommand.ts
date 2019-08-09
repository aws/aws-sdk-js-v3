import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddFacetToObject } from "../model/AddFacetToObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddFacetToObjectInput } from "../types/AddFacetToObjectInput";
import { AddFacetToObjectOutput } from "../types/AddFacetToObjectOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/AddFacetToObjectInput";
export * from "../types/AddFacetToObjectOutput";
export * from "../types/AddFacetToObjectExceptionsUnion";

export class AddFacetToObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddFacetToObjectInput,
      OutputTypesUnion,
      AddFacetToObjectOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AddFacetToObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddFacetToObjectInput,
    AddFacetToObjectOutput,
    Uint8Array
  >();

  constructor(readonly input: AddFacetToObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<AddFacetToObjectInput, AddFacetToObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddFacetToObjectInput, AddFacetToObjectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
