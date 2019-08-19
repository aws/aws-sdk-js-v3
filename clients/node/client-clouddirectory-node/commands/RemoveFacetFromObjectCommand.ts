import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveFacetFromObject } from "../model/operations/RemoveFacetFromObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveFacetFromObjectInput } from "../types/RemoveFacetFromObjectInput";
import { RemoveFacetFromObjectOutput } from "../types/RemoveFacetFromObjectOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/RemoveFacetFromObjectInput";
export * from "../types/RemoveFacetFromObjectOutput";
export * from "../types/RemoveFacetFromObjectExceptionsUnion";

export class RemoveFacetFromObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveFacetFromObjectInput,
      OutputTypesUnion,
      RemoveFacetFromObjectOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveFacetFromObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveFacetFromObjectInput,
    RemoveFacetFromObjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveFacetFromObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveFacetFromObjectInput,
    RemoveFacetFromObjectOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveFacetFromObjectInput, RemoveFacetFromObjectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
