import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListObjectParentPaths } from "../model/ListObjectParentPaths";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectParentPathsInput } from "../types/ListObjectParentPathsInput";
import { ListObjectParentPathsOutput } from "../types/ListObjectParentPathsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListObjectParentPathsInput";
export * from "../types/ListObjectParentPathsOutput";
export * from "../types/ListObjectParentPathsExceptionsUnion";

export class ListObjectParentPathsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectParentPathsInput,
      OutputTypesUnion,
      ListObjectParentPathsOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListObjectParentPaths;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectParentPathsInput,
    ListObjectParentPathsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListObjectParentPathsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListObjectParentPathsInput,
    ListObjectParentPathsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListObjectParentPathsInput, ListObjectParentPathsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
